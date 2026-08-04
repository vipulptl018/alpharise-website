from sqlalchemy.orm import Session

from app.core.exceptions import AppError
from app.models.contact import ContactInquiry
from app.repositories.contact_repository import ContactRepository
from app.schemas import ContactCreate
from app.services.email_service import EmailService


class ContactService:
    def __init__(self, db: Session) -> None:
        self.repo = ContactRepository(db)
        self.email = EmailService()

    def create(
        self,
        payload: ContactCreate,
        *,
        ip_address: str | None,
        user_agent: str | None,
    ) -> ContactInquiry:
        inquiry = ContactInquiry(
            full_name=payload.full_name,
            email=str(payload.email).lower(),
            phone=payload.phone,
            company=payload.company,
            subject=payload.subject,
            message=payload.message,
            ip_address=ip_address,
            user_agent=user_agent,
            status="new",
        )
        saved = self.repo.add(inquiry)
        try:
            self.email.send_contact_notification(saved)
        except AppError:
            raise
        return saved

    def list_for_admin(self, *, page: int, page_size: int) -> tuple[list[ContactInquiry], int]:
        return self.repo.list_inquiries(page=page, page_size=page_size)
