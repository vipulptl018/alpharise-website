from fastapi import APIRouter, File, Form, Request, UploadFile, status

from app.core.config import get_settings
from app.core.exceptions import AppError, to_http_exception
from app.core.rate_limit import limiter
from app.deps.auth import DbSession, StaffUser
from app.schemas import CareerApplicationCreate, CareerApplicationRead, MessageResponse
from app.schemas.common import PaginatedResponse
from app.services.content_service import CareerService
from app.utils.pagination import paginated
from app.utils.request import get_client_ip

settings = get_settings()
router = APIRouter(prefix="/careers", tags=["Careers"])


@router.post("/applications", response_model=MessageResponse, status_code=status.HTTP_201_CREATED)
@limiter.limit(settings.rate_limit_public)
async def apply(
    request: Request,
    db: DbSession,
    full_name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    role_applied: str = Form(...),
    resume: UploadFile = File(...),
    linkedin_url: str | None = Form(None),
    portfolio_url: str | None = Form(None),
    cover_letter: str | None = Form(None),
) -> MessageResponse:
    payload = CareerApplicationCreate(
        full_name=full_name,
        email=email,
        phone=phone,
        role_applied=role_applied,
        linkedin_url=linkedin_url,
        portfolio_url=portfolio_url,
        cover_letter=cover_letter,
    )
    try:
        await CareerService(db).create(
            payload, resume, ip_address=get_client_ip(request)
        )
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return MessageResponse(
        success=True,
        message="Your application has been submitted. HR will review it shortly.",
    )


@router.get("/applications", response_model=PaginatedResponse[CareerApplicationRead])
def list_applications(
    _: StaffUser,
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[CareerApplicationRead]:
    items, total = CareerService(db).list_for_admin(page=page, page_size=page_size)
    return paginated(
        [CareerApplicationRead.model_validate(item) for item in items],
        total,
        page,
        page_size,
    )
