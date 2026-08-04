from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.models.contact import ContactInquiry
from app.repositories.base import BaseRepository


class ContactRepository(BaseRepository[ContactInquiry]):
    def __init__(self, db: Session) -> None:
        super().__init__(db, ContactInquiry)

    def list_inquiries(self, *, page: int, page_size: int) -> tuple[list[ContactInquiry], int]:
        stmt = (
            select(ContactInquiry)
            .where(ContactInquiry.is_deleted.is_(False))
            .order_by(ContactInquiry.created_at.desc())
        )
        return self.paginate(stmt, page=page, page_size=page_size)

    def count_all(self) -> int:
        return int(
            self.db.scalar(
                select(func.count()).select_from(ContactInquiry).where(
                    ContactInquiry.is_deleted.is_(False)
                )
            )
            or 0
        )
