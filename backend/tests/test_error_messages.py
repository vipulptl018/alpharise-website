import os

os.environ.setdefault(
    "SECRET_KEY",
    "unit-test-secret-key-alpharise-please-change-in-production-32",
)
os.environ.setdefault(
    "DATABASE_URL",
    "postgresql+psycopg2://postgres:postgres@localhost:5432/alpharise",
)

import pytest  # noqa: E402
import resend  # noqa: E402
from fastapi.testclient import TestClient  # noqa: E402
from sqlalchemy.exc import SQLAlchemyError  # noqa: E402

from app.core.config import get_settings  # noqa: E402
from app.core.exceptions import AppError  # noqa: E402
from app.main import create_app  # noqa: E402
from app.services.resend_service import (  # noqa: E402
    EMAIL_UNAVAILABLE_MESSAGE,
    ResendService,
)


def _client_with_failing_routes() -> TestClient:
    app = create_app()

    @app.get("/_test/unhandled")
    def unhandled() -> None:
        raise RuntimeError("internal-detail-token")

    @app.get("/_test/database")
    def database() -> None:
        raise SQLAlchemyError("password=hunter2 host=db.internal")

    return TestClient(app, raise_server_exceptions=False)


def test_unhandled_error_does_not_leak_exception_text() -> None:
    response = _client_with_failing_routes().get("/_test/unhandled")
    assert response.status_code == 500
    body = response.json()
    assert body["success"] is False
    assert "internal-detail-token" not in response.text
    assert body["message"] == "Something went wrong. Please try again later."


def test_database_error_does_not_leak_exception_text() -> None:
    response = _client_with_failing_routes().get("/_test/database")
    assert response.status_code == 500
    assert "hunter2" not in response.text
    assert "db.internal" not in response.text
    assert response.json()["message"] == (
        "A database error occurred. Please try again later."
    )


def test_health_hides_database_driver_error() -> None:
    # No PostgreSQL is listening on the default test URL, so the check must fail.
    response = TestClient(create_app(), raise_server_exceptions=False).get("/health")
    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "degraded"
    database = next(c for c in body["components"] if c["name"] == "database")
    assert database["status"] == "error"
    assert database["detail"] == "Database unavailable"
    assert "psycopg2" not in response.text
    assert "localhost" not in response.text


def test_missing_resend_config_returns_generic_message() -> None:
    settings = get_settings().model_copy(update={"resend_api_key": ""})
    with pytest.raises(AppError) as excinfo:
        ResendService(settings).send(to="admin@example.com", subject="s", text="t")
    assert excinfo.value.status_code == 502
    assert excinfo.value.message == EMAIL_UNAVAILABLE_MESSAGE
    assert "RESEND" not in excinfo.value.message


def test_resend_failure_returns_generic_message(monkeypatch: pytest.MonkeyPatch) -> None:
    def fail(_params: object) -> None:
        raise RuntimeError("api-key re_secret rejected by resend")

    monkeypatch.setattr(resend.Emails, "send", staticmethod(fail))
    settings = get_settings().model_copy(
        update={"resend_api_key": "re_test", "resend_from": "A <a@example.com>"}
    )
    with pytest.raises(AppError) as excinfo:
        ResendService(settings).send(to="admin@example.com", subject="s", text="t")
    assert excinfo.value.status_code == 502
    assert excinfo.value.message == EMAIL_UNAVAILABLE_MESSAGE
    assert "re_secret" not in excinfo.value.message
