from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

from app.core.config import get_settings

settings = get_settings()

# Free-tier Supabase / Render: keep pool small to avoid connection exhaustion.
_pool_size = 5 if settings.is_production else 10
_max_overflow = 5 if settings.is_production else 20

engine = create_engine(
    settings.database_url,
    pool_pre_ping=True,
    pool_size=_pool_size,
    max_overflow=_max_overflow,
    pool_recycle=300 if settings.is_production else 1800,
)

SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
    expire_on_commit=False,
)


def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
