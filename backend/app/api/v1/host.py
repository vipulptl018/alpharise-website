from uuid import UUID

from fastapi import APIRouter, Request, status

from app.core.config import get_settings
from app.core.exceptions import AppError, to_http_exception
from app.core.rate_limit import limiter
from app.deps.auth import AdminUser, DbSession, StaffUser
from app.schemas import ApprovalUpdate, HostCreate, HostRead, MessageResponse
from app.schemas.common import PaginatedResponse
from app.services.content_service import HostService
from app.utils.pagination import paginated
from app.utils.request import get_client_ip

settings = get_settings()
router = APIRouter(prefix="/hosts", tags=["Hosts"])


@router.post("/register", response_model=MessageResponse, status_code=status.HTTP_201_CREATED)
@limiter.limit(settings.rate_limit_public)
async def register_host(
    request: Request,
    payload: HostCreate,
    db: DbSession,
) -> MessageResponse:
    try:
        HostService(db).register(payload, ip_address=get_client_ip(request))
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return MessageResponse(
        success=True,
        message="Host registration received. Our team will review your application.",
    )


@router.get("", response_model=PaginatedResponse[HostRead])
def list_hosts(
    _: StaffUser,
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[HostRead]:
    items, total = HostService(db).list_for_admin(page=page, page_size=page_size)
    return paginated([HostRead.model_validate(i) for i in items], total, page, page_size)


@router.patch("/{host_id}/approval", response_model=HostRead)
def update_host_approval(
    host_id: UUID,
    payload: ApprovalUpdate,
    _: AdminUser,
    db: DbSession,
) -> HostRead:
    try:
        host = HostService(db).update_approval(host_id, payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return HostRead.model_validate(host)
