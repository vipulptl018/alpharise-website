from typing import Any, Generic, TypeVar
from uuid import UUID

from sqlalchemy import Select, func, select
from sqlalchemy.orm import Session

from app.database.base import Base

ModelT = TypeVar("ModelT", bound=Base)


class BaseRepository(Generic[ModelT]):
    def __init__(self, db: Session, model: type[ModelT]) -> None:
        self.db = db
        self.model = model

    def add(self, entity: ModelT) -> ModelT:
        self.db.add(entity)
        self.db.commit()
        self.db.refresh(entity)
        return entity

    def get_by_id(self, entity_id: UUID, *, include_deleted: bool = False) -> ModelT | None:
        stmt = select(self.model).where(self.model.id == entity_id)  # type: ignore[attr-defined]
        if hasattr(self.model, "is_deleted") and not include_deleted:
            stmt = stmt.where(self.model.is_deleted.is_(False))  # type: ignore[attr-defined]
        return self.db.scalar(stmt)

    def soft_delete(self, entity: ModelT) -> ModelT:
        if hasattr(entity, "soft_delete"):
            entity.soft_delete()  # type: ignore[attr-defined]
            self.db.add(entity)
            self.db.commit()
            self.db.refresh(entity)
        return entity

    def paginate(
        self,
        stmt: Select[Any],
        *,
        page: int = 1,
        page_size: int = 20,
    ) -> tuple[list[ModelT], int]:
        page = max(page, 1)
        page_size = min(max(page_size, 1), 100)
        total = self.db.scalar(select(func.count()).select_from(stmt.subquery())) or 0
        items = list(
            self.db.scalars(stmt.offset((page - 1) * page_size).limit(page_size)).all()
        )
        return items, int(total)
