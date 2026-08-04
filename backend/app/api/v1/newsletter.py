from fastapi import APIRouter, Request, status

from app.core.config import get_settings
from app.core.exceptions import AppError, to_http_exception
from app.core.rate_limit import limiter
from app.deps.auth import DbSession, StaffUser
from app.schemas import MessageResponse, NewsletterCreate, NewsletterRead
from app.schemas.common import PaginatedResponse
from app.services.newsletter_service import NewsletterService
from app.utils.pagination import paginated
from app.utils.request import get_client_ip

settings = get_settings()
router = APIRouter(prefix="/newsletter", tags=["Newsletter"])


@router.post("", response_model=MessageResponse, status_code=status.HTTP_201_CREATED)
@limiter.limit(settings.rate_limit_public)
async def subscribe(
    request: Request,
    payload: NewsletterCreate,
    db: DbSession,
) -> MessageResponse:
    try:
        NewsletterService(db).subscribe(payload, ip_address=get_client_ip(request))
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return MessageResponse(
        success=True,
        message="You are subscribed for occasional updates.",
    )


@router.get("", response_model=PaginatedResponse[NewsletterRead])
def list_subscribers(
    _: StaffUser,
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[NewsletterRead]:
    items, total = NewsletterService(db).list_for_admin(page=page, page_size=page_size)
    return paginated(
        [NewsletterRead.model_validate(item) for item in items],
        total,
        page,
        page_size,
    )
