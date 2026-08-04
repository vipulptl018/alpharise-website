from sqlalchemy.orm import Session

from app.core.exceptions import ConflictError
from app.models.newsletter import NewsletterSubscriber
from app.repositories.newsletter_repository import NewsletterRepository
from app.schemas import NewsletterCreate
from app.services.email_service import EmailService


class NewsletterService:
    def __init__(self, db: Session) -> None:
        self.repo = NewsletterRepository(db)
        self.email = EmailService()

    def subscribe(
        self, payload: NewsletterCreate, *, ip_address: str | None
    ) -> NewsletterSubscriber:
        existing = self.repo.get_by_email(str(payload.email))
        if existing and existing.is_active:
            raise ConflictError("This email is already subscribed.")
        if existing:
            existing.is_active = True
            existing.is_deleted = False
            existing.deleted_at = None
            self.repo.db.add(existing)
            self.repo.db.commit()
            self.repo.db.refresh(existing)
            self.email.send_newsletter_welcome(existing.email)
            return existing

        subscriber = NewsletterSubscriber(
            email=str(payload.email).lower(),
            is_active=True,
            source="website",
            ip_address=ip_address,
        )
        saved = self.repo.add(subscriber)
        self.email.send_newsletter_welcome(saved.email)
        return saved

    def list_for_admin(
        self, *, page: int, page_size: int
    ) -> tuple[list[NewsletterSubscriber], int]:
        return self.repo.list_subscribers(page=page, page_size=page_size)
