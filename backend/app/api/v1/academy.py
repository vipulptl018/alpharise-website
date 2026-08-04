from fastapi import APIRouter, Request, status

from app.core.config import get_settings
from app.core.exceptions import AppError, to_http_exception
from app.core.rate_limit import limiter
from app.deps.auth import DbSession, StaffUser
from app.schemas import AcademyEnquiryCreate, AcademyEnquiryRead, MessageResponse
from app.schemas.common import PaginatedResponse
from app.services.content_service import AcademyService
from app.utils.pagination import paginated
from app.utils.request import get_client_ip

settings = get_settings()
router = APIRouter(prefix="/academy", tags=["Academy"])


@router.post("/enquiries", response_model=MessageResponse, status_code=status.HTTP_201_CREATED)
@limiter.limit(settings.rate_limit_public)
async def create_enquiry(
    request: Request,
    payload: AcademyEnquiryCreate,
    db: DbSession,
) -> MessageResponse:
    try:
        AcademyService(db).create(payload, ip_address=get_client_ip(request))
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return MessageResponse(
        success=True,
        message="Your academy enquiry has been received. Our team will contact you shortly.",
    )


@router.get("/enquiries", response_model=PaginatedResponse[AcademyEnquiryRead])
def list_enquiries(
    _: StaffUser,
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[AcademyEnquiryRead]:
    items, total = AcademyService(db).list_for_admin(page=page, page_size=page_size)
    return paginated(
        [AcademyEnquiryRead.model_validate(item) for item in items],
        total,
        page,
        page_size,
    )
