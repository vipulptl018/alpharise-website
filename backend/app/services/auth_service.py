from datetime import UTC, datetime
from uuid import UUID

from sqlalchemy.orm import Session

from app.core.constants import (
    ROLE_USER,
    TOKEN_TYPE_PASSWORD_RESET,
    TOKEN_TYPE_REFRESH,
)
from app.core.exceptions import ConflictError, ForbiddenError, NotFoundError, UnauthorizedError
from app.core.security import (
    create_access_token,
    create_password_reset_token,
    create_refresh_token,
    get_token_subject,
    hash_password,
    verify_password,
)
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas import (
    ForgotPasswordRequest,
    ResetPasswordRequest,
    TokenPair,
    UserLogin,
    UserRegister,
)
from app.services.email_service import EmailService


class AuthService:
    def __init__(self, db: Session) -> None:
        self.users = UserRepository(db)
        self.email = EmailService()

    def register(self, payload: UserRegister) -> User:
        if self.users.get_by_email(str(payload.email)):
            raise ConflictError("An account with this email already exists")
        user = User(
            email=str(payload.email).lower(),
            full_name=payload.full_name.strip(),
            hashed_password=hash_password(payload.password),
            role=ROLE_USER,
            is_active=True,
        )
        return self.users.add(user)

    def login(self, payload: UserLogin) -> TokenPair:
        user = self.users.get_by_email(str(payload.email))
        if not user or not verify_password(payload.password, user.hashed_password):
            raise UnauthorizedError("Invalid email or password")
        if not user.is_active or user.is_deleted:
            raise ForbiddenError("Account is inactive")
        user.last_login_at = datetime.now(UTC)
        self.users.db.add(user)
        self.users.db.commit()
        return TokenPair(
            access_token=create_access_token(user.id, user.role),
            refresh_token=create_refresh_token(user.id, user.role),
        )

    def refresh(self, refresh_token: str) -> TokenPair:
        try:
            user_id = get_token_subject(refresh_token, TOKEN_TYPE_REFRESH)
        except ValueError as exc:
            raise UnauthorizedError(str(exc)) from exc
        user = self.users.get_by_id(UUID(user_id))
        if not user or not user.is_active or user.is_deleted:
            raise UnauthorizedError("User not found or inactive")
        return TokenPair(
            access_token=create_access_token(user.id, user.role),
            refresh_token=create_refresh_token(user.id, user.role),
        )

    def forgot_password(self, payload: ForgotPasswordRequest) -> None:
        user = self.users.get_by_email(str(payload.email))
        if not user:
            return
        token = create_password_reset_token(user.id)
        self.email.send_password_reset(user.email, token)

    def reset_password(self, payload: ResetPasswordRequest) -> None:
        try:
            user_id = get_token_subject(payload.token, TOKEN_TYPE_PASSWORD_RESET)
        except ValueError as exc:
            raise UnauthorizedError(str(exc)) from exc
        user = self.users.get_by_id(UUID(user_id))
        if not user:
            raise NotFoundError("User not found")
        user.hashed_password = hash_password(payload.new_password)
        user.password_changed_at = datetime.now(UTC)
        self.users.db.add(user)
        self.users.db.commit()
