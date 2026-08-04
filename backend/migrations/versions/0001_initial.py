"""Initial ALPHARISE schema

Revision ID: 0001_initial
Revises:
Create Date: 2026-08-04
"""

from collections.abc import Sequence

from alembic import op

from app.database.base import Base
import app.models  # noqa: F401

revision: str = "0001_initial"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    bind = op.get_bind()
    Base.metadata.create_all(bind=bind)


def downgrade() -> None:
    bind = op.get_bind()
    Base.metadata.drop_all(bind=bind)
