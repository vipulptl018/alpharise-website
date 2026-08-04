
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories.base import BaseRepository


class UserRepository(BaseRepository[User]):
    def __init__(self, db: Session) -> None:
        super().__init__(db, User)

    def get_by_email(self, email: str) -> User | None:
        stmt = select(User).where(
            User.email == email.lower(),
            User.is_deleted.is_(False),
        )
        return self.db.scalar(stmt)

    def list_users(self, *, page: int, page_size: int) -> tuple[list[User], int]:
        stmt = (
            select(User)
            .where(User.is_deleted.is_(False))
            .order_by(User.created_at.desc())
        )
        return self.paginate(stmt, page=page, page_size=page_size)

    def count_active(self) -> int:
        from sqlalchemy import func

        return int(
            self.db.scalar(
                select(func.count()).select_from(User).where(
                    User.is_deleted.is_(False),
                    User.is_active.is_(True),
                )
            )
            or 0
        )
