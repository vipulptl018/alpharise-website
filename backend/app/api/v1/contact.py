from fastapi import APIRouter, HTTPException, Request, status

from app.core.config import get_settings
from app.core.exceptions import AppError
from app.core.rate_limit import limiter
from app.deps.auth import DbSession, StaffUser
from app.schemas import ContactCreate, ContactRead, MessageResponse
from app.schemas.common import PaginatedResponse
from app.services.contact_service import ContactService
from app.utils.pagination import paginated
from app.utils.request import get_client_ip, get_user_agent

settings = get_settings()
router = APIRouter(prefix="/contact", tags=["Contact"])


@router.post(
    "",
    response_model=MessageResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact inquiry",
)
@limiter.limit(settings.rate_limit_public)
async def create_contact(
    request: Request,
    payload: ContactCreate,
    db: DbSession,
) -> MessageResponse:
    try:
        ContactService(db).create(
            payload,
            ip_address=get_client_ip(request),
            user_agent=get_user_agent(request),
        )
    except AppError as exc:
        raise HTTPException(status_code=exc.status_code, detail=exc.message) from exc
    return MessageResponse(
        success=True,
        message="Message sent successfully.",
    )


@router.get(
    "",
    response_model=PaginatedResponse[ContactRead],
    summary="List contact inquiries (staff)",
)
def list_contacts(
    _: StaffUser,
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[ContactRead]:
    items, total = ContactService(db).list_for_admin(page=page, page_size=page_size)
    return paginated(
        [ContactRead.model_validate(item) for item in items],
        total,
        page,
        page_size,
    )
