from sqlalchemy import func, select
from sqlalchemy.orm import Session

from app.models.academy import AcademyEnquiry
from app.models.blog import BlogCategory, BlogPost, BlogTag
from app.models.career import CareerApplication
from app.models.platform import CreatorRegistration, HostRegistration
from app.repositories.base import BaseRepository


class AcademyRepository(BaseRepository[AcademyEnquiry]):
    def __init__(self, db: Session) -> None:
        super().__init__(db, AcademyEnquiry)

    def list_enquiries(self, *, page: int, page_size: int) -> tuple[list[AcademyEnquiry], int]:
        stmt = (
            select(AcademyEnquiry)
            .where(AcademyEnquiry.is_deleted.is_(False))
            .order_by(AcademyEnquiry.created_at.desc())
        )
        return self.paginate(stmt, page=page, page_size=page_size)

    def count_all(self) -> int:
        return int(
            self.db.scalar(
                select(func.count()).select_from(AcademyEnquiry).where(
                    AcademyEnquiry.is_deleted.is_(False)
                )
            )
            or 0
        )


class CareerRepository(BaseRepository[CareerApplication]):
    def __init__(self, db: Session) -> None:
        super().__init__(db, CareerApplication)

    def list_applications(self, *, page: int, page_size: int) -> tuple[list[CareerApplication], int]:
        stmt = (
            select(CareerApplication)
            .where(CareerApplication.is_deleted.is_(False))
            .order_by(CareerApplication.created_at.desc())
        )
        return self.paginate(stmt, page=page, page_size=page_size)

    def count_all(self) -> int:
        return int(
            self.db.scalar(
                select(func.count()).select_from(CareerApplication).where(
                    CareerApplication.is_deleted.is_(False)
                )
            )
            or 0
        )


class HostRepository(BaseRepository[HostRegistration]):
    def __init__(self, db: Session) -> None:
        super().__init__(db, HostRegistration)

    def list_hosts(self, *, page: int, page_size: int) -> tuple[list[HostRegistration], int]:
        stmt = (
            select(HostRegistration)
            .where(HostRegistration.is_deleted.is_(False))
            .order_by(HostRegistration.created_at.desc())
        )
        return self.paginate(stmt, page=page, page_size=page_size)

    def count_all(self) -> int:
        return int(
            self.db.scalar(
                select(func.count()).select_from(HostRegistration).where(
                    HostRegistration.is_deleted.is_(False)
                )
            )
            or 0
        )


class CreatorRepository(BaseRepository[CreatorRegistration]):
    def __init__(self, db: Session) -> None:
        super().__init__(db, CreatorRegistration)

    def list_creators(self, *, page: int, page_size: int) -> tuple[list[CreatorRegistration], int]:
        stmt = (
            select(CreatorRegistration)
            .where(CreatorRegistration.is_deleted.is_(False))
            .order_by(CreatorRegistration.created_at.desc())
        )
        return self.paginate(stmt, page=page, page_size=page_size)

    def count_all(self) -> int:
        return int(
            self.db.scalar(
                select(func.count()).select_from(CreatorRegistration).where(
                    CreatorRegistration.is_deleted.is_(False)
                )
            )
            or 0
        )


class BlogRepository(BaseRepository[BlogPost]):
    def __init__(self, db: Session) -> None:
        super().__init__(db, BlogPost)

    def get_by_slug(self, slug: str) -> BlogPost | None:
        return self.db.scalar(
            select(BlogPost).where(BlogPost.slug == slug, BlogPost.is_deleted.is_(False))
        )

    def list_posts(
        self, *, page: int, page_size: int, published_only: bool = False
    ) -> tuple[list[BlogPost], int]:
        stmt = select(BlogPost).where(BlogPost.is_deleted.is_(False))
        if published_only:
            stmt = stmt.where(BlogPost.is_published.is_(True))
        stmt = stmt.order_by(BlogPost.created_at.desc())
        return self.paginate(stmt, page=page, page_size=page_size)

    def get_category_by_slug(self, slug: str) -> BlogCategory | None:
        return self.db.scalar(
            select(BlogCategory).where(
                BlogCategory.slug == slug, BlogCategory.is_deleted.is_(False)
            )
        )

    def get_tag_by_slug(self, slug: str) -> BlogTag | None:
        return self.db.scalar(
            select(BlogTag).where(BlogTag.slug == slug, BlogTag.is_deleted.is_(False))
        )

    def list_categories(self) -> list[BlogCategory]:
        return list(
            self.db.scalars(
                select(BlogCategory)
                .where(BlogCategory.is_deleted.is_(False))
                .order_by(BlogCategory.name.asc())
            ).all()
        )

    def list_tags(self) -> list[BlogTag]:
        return list(
            self.db.scalars(
                select(BlogTag).where(BlogTag.is_deleted.is_(False)).order_by(BlogTag.name.asc())
            ).all()
        )

    def count_posts(self) -> int:
        return int(
            self.db.scalar(
                select(func.count()).select_from(BlogPost).where(BlogPost.is_deleted.is_(False))
            )
            or 0
        )
