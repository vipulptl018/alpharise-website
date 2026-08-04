import os

os.environ.setdefault(
    "SECRET_KEY",
    "unit-test-secret-key-alpharise-please-change-in-production-32",
)
os.environ.setdefault(
    "DATABASE_URL",
    "postgresql+psycopg2://postgres:postgres@localhost:5432/alpharise",
)

from fastapi.testclient import TestClient  # noqa: E402

from app.main import app  # noqa: E402


def test_openapi_available() -> None:
    client = TestClient(app, raise_server_exceptions=False)
    response = client.get("/openapi.json")
    assert response.status_code == 200
    payload = response.json()
    assert "/api/v1/contact" in payload["paths"]
    assert "/api/v1/auth/login" in payload["paths"]
    assert "/docs" not in payload["paths"]


def test_docs_ui() -> None:
    client = TestClient(app, raise_server_exceptions=False)
    assert client.get("/docs").status_code == 200
    assert client.get("/redoc").status_code == 200
