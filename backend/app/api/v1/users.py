from uuid import UUID

from fastapi import APIRouter

from app.core.exceptions import NotFoundError, to_http_exception
from app.deps.auth import AdminUser, DbSession
from app.repositories.user_repository import UserRepository
from app.schemas import UserRead, UserUpdateRole
from app.schemas.common import PaginatedResponse
from app.utils.pagination import paginated

router = APIRouter(prefix="/users", tags=["Users"])


@router.get("", response_model=PaginatedResponse[UserRead])
def list_users(
    _: AdminUser,
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[UserRead]:
    items, total = UserRepository(db).list_users(page=page, page_size=page_size)
    return paginated([UserRead.model_validate(i) for i in items], total, page, page_size)


@router.patch("/{user_id}", response_model=UserRead)
def update_user(
    user_id: UUID,
    payload: UserUpdateRole,
    _: AdminUser,
    db: DbSession,
) -> UserRead:
    repo = UserRepository(db)
    user = repo.get_by_id(user_id)
    if not user:
        raise to_http_exception(NotFoundError("User not found"))
    user.role = payload.role
    user.is_active = payload.is_active
    repo.db.add(user)
    repo.db.commit()
    repo.db.refresh(user)
    return UserRead.model_validate(user)
