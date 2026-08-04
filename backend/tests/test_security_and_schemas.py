import os

os.environ.setdefault(
    "SECRET_KEY",
    "unit-test-secret-key-alpharise-please-change-in-production-32",
)
os.environ.setdefault(
    "DATABASE_URL",
    "postgresql+psycopg2://postgres:postgres@localhost:5432/alpharise",
)

from app.core.security import hash_password, verify_password  # noqa: E402
from app.schemas import ContactCreate  # noqa: E402


def test_password_hash_roundtrip() -> None:
    hashed = hash_password("SecurePass123!")
    assert hashed != "SecurePass123!"
    assert verify_password("SecurePass123!", hashed)
    assert not verify_password("wrong", hashed)


def test_contact_schema_accepts_valid_payload() -> None:
    payload = ContactCreate(
        full_name="Vipul Patil",
        email="vipul@example.com",
        phone="+91 9168020295",
        company="Example Pvt Ltd",
        subject="Website contact inquiry",
        message="I would like to discuss a software project with ALPHARISE.",
    )
    assert payload.full_name == "Vipul Patil"
    assert payload.company == "Example Pvt Ltd"


def test_contact_schema_rejects_short_message() -> None:
    try:
        ContactCreate(
            full_name="Vipul Patil",
            email="vipul@example.com",
            phone="+91 9168020295",
            subject="Hello",
            message="Too short",
        )
        raised = False
    except Exception:
        raised = True
    assert raised
