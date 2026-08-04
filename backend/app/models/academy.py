from uuid import UUID, uuid4

from sqlalchemy import String, Text
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base, SoftDeleteMixin, TimestampMixin


class AcademyEnquiry(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "academy_enquiries"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    enquiry_type: Mapped[str] = mapped_column(String(40), nullable=False, index=True)
    full_name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False, index=True)
    phone: Mapped[str] = mapped_column(String(40), nullable=False)
    course_interest: Mapped[str | None] = mapped_column(String(160), nullable=True)
    preferred_schedule: Mapped[str | None] = mapped_column(String(160), nullable=True)
    message: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(String(32), nullable=False, default="new", index=True)
    ip_address: Mapped[str | None] = mapped_column(String(64), nullable=True)
