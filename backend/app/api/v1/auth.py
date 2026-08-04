from fastapi import APIRouter, Request, status

from app.core.config import get_settings
from app.core.exceptions import AppError, to_http_exception
from app.core.rate_limit import limiter
from app.deps.auth import CurrentUser, DbSession
from app.schemas import (
    ForgotPasswordRequest,
    MessageResponse,
    RefreshRequest,
    ResetPasswordRequest,
    TokenPair,
    UserLogin,
    UserRead,
    UserRegister,
)
from app.services.auth_service import AuthService

settings = get_settings()
router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register", response_model=UserRead, status_code=status.HTTP_201_CREATED)
@limiter.limit(settings.rate_limit_auth)
async def register(request: Request, payload: UserRegister, db: DbSession) -> UserRead:
    try:
        user = AuthService(db).register(payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return UserRead.model_validate(user)


@router.post("/login", response_model=TokenPair)
@limiter.limit(settings.rate_limit_auth)
async def login(request: Request, payload: UserLogin, db: DbSession) -> TokenPair:
    try:
        return AuthService(db).login(payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc


@router.post("/refresh", response_model=TokenPair)
@limiter.limit(settings.rate_limit_auth)
async def refresh(request: Request, payload: RefreshRequest, db: DbSession) -> TokenPair:
    try:
        return AuthService(db).refresh(payload.refresh_token)
    except AppError as exc:
        raise to_http_exception(exc) from exc


@router.post("/forgot-password", response_model=MessageResponse)
@limiter.limit(settings.rate_limit_auth)
async def forgot_password(
    request: Request, payload: ForgotPasswordRequest, db: DbSession
) -> MessageResponse:
    try:
        AuthService(db).forgot_password(payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return MessageResponse(
        success=True,
        message="If an account exists for that email, a reset link has been sent.",
    )


@router.post("/reset-password", response_model=MessageResponse)
@limiter.limit(settings.rate_limit_auth)
async def reset_password(
    request: Request, payload: ResetPasswordRequest, db: DbSession
) -> MessageResponse:
    try:
        AuthService(db).reset_password(payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return MessageResponse(success=True, message="Password updated successfully.")


@router.get("/me", response_model=UserRead)
def me(user: CurrentUser) -> UserRead:
    return UserRead.model_validate(user)
