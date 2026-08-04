from uuid import UUID

from fastapi import APIRouter, Request, status

from app.core.config import get_settings
from app.core.exceptions import AppError, to_http_exception
from app.core.rate_limit import limiter
from app.deps.auth import AdminUser, DbSession, StaffUser
from app.schemas import ApprovalUpdate, CreatorCreate, CreatorRead, MessageResponse
from app.schemas.common import PaginatedResponse
from app.services.content_service import CreatorService
from app.utils.pagination import paginated
from app.utils.request import get_client_ip

settings = get_settings()
router = APIRouter(prefix="/creators", tags=["Creators"])


@router.post("/register", response_model=MessageResponse, status_code=status.HTTP_201_CREATED)
@limiter.limit(settings.rate_limit_public)
async def register_creator(
    request: Request,
    payload: CreatorCreate,
    db: DbSession,
) -> MessageResponse:
    try:
        CreatorService(db).register(payload, ip_address=get_client_ip(request))
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return MessageResponse(
        success=True,
        message="Creator registration received. Our team will review your application.",
    )


@router.get("", response_model=PaginatedResponse[CreatorRead])
def list_creators(
    _: StaffUser,
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[CreatorRead]:
    items, total = CreatorService(db).list_for_admin(page=page, page_size=page_size)
    return paginated([CreatorRead.model_validate(i) for i in items], total, page, page_size)


@router.patch("/{creator_id}/approval", response_model=CreatorRead)
def update_creator_approval(
    creator_id: UUID,
    payload: ApprovalUpdate,
    _: AdminUser,
    db: DbSession,
) -> CreatorRead:
    try:
        creator = CreatorService(db).update_approval(creator_id, payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return CreatorRead.model_validate(creator)
