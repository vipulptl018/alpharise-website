from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.models.newsletter import NewsletterSubscriber
from app.repositories.base import BaseRepository


class NewsletterRepository(BaseRepository[NewsletterSubscriber]):
    def __init__(self, db: Session) -> None:
        super().__init__(db, NewsletterSubscriber)

    def get_by_email(self, email: str) -> NewsletterSubscriber | None:
        return self.db.scalar(
            select(NewsletterSubscriber).where(
                NewsletterSubscriber.email == email.lower(),
                NewsletterSubscriber.is_deleted.is_(False),
            )
        )

    def list_subscribers(self, *, page: int, page_size: int) -> tuple[list[NewsletterSubscriber], int]:
        stmt = (
            select(NewsletterSubscriber)
            .where(NewsletterSubscriber.is_deleted.is_(False))
            .order_by(NewsletterSubscriber.created_at.desc())
        )
        return self.paginate(stmt, page=page, page_size=page_size)

    def count_active(self) -> int:
        return int(
            self.db.scalar(
                select(func.count()).select_from(NewsletterSubscriber).where(
                    NewsletterSubscriber.is_deleted.is_(False),
                    NewsletterSubscriber.is_active.is_(True),
                )
            )
            or 0
        )
