from sqlalchemy.orm import Session

from app.models.contact import ContactInquiry
from app.repositories.contact_repository import ContactRepository
from app.schemas import ContactCreate
from app.services.resend_service import ResendService


class ContactService:
    def __init__(self, db: Session) -> None:
        self.repo = ContactRepository(db)
        self.email = ResendService()

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
        # Not caught on purpose: a failed notification surfaces as a 502 to the caller
        # (ResendService logs the real cause and returns a generic message).
        self.email.send_contact_notification(saved)
        return saved

    def list_for_admin(self, *, page: int, page_size: int) -> tuple[list[ContactInquiry], int]:
        return self.repo.list_inquiries(page=page, page_size=page_size)
