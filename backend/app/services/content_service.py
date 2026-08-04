from uuid import UUID

from fastapi import UploadFile
from sqlalchemy.orm import Session

from app.core.constants import APPROVAL_STATUSES
from app.core.exceptions import AppError, NotFoundError
from app.models.academy import AcademyEnquiry
from app.models.blog import BlogCategory, BlogPost, BlogPostTag, BlogTag
from app.models.career import CareerApplication
from app.models.platform import CreatorRegistration, HostRegistration
from app.repositories.content_repository import (
    AcademyRepository,
    BlogRepository,
    CareerRepository,
    CreatorRepository,
    HostRepository,
)
from app.schemas import (
    AcademyEnquiryCreate,
    ApprovalUpdate,
    BlogCategoryCreate,
    BlogPostCreate,
    BlogPostUpdate,
    BlogTagCreate,
    CareerApplicationCreate,
    CreatorCreate,
    HostCreate,
)
from app.services.email_service import EmailService
from app.utils.uploads import UploadService


class AcademyService:
    def __init__(self, db: Session) -> None:
        self.repo = AcademyRepository(db)
        self.email = EmailService()

    def create(self, payload: AcademyEnquiryCreate, *, ip_address: str | None) -> AcademyEnquiry:
        enquiry = AcademyEnquiry(
            enquiry_type=payload.enquiry_type,
            full_name=payload.full_name.strip(),
            email=str(payload.email).lower(),
            phone=payload.phone,
            course_interest=payload.course_interest,
            preferred_schedule=payload.preferred_schedule,
            message=payload.message,
            ip_address=ip_address,
            status="new",
        )
        return self.repo.add(enquiry)

    def list_for_admin(self, *, page: int, page_size: int) -> tuple[list[AcademyEnquiry], int]:
        return self.repo.list_enquiries(page=page, page_size=page_size)


class CareerService:
    def __init__(self, db: Session) -> None:
        self.repo = CareerRepository(db)
        self.email = EmailService()
        self.uploads = UploadService()

    async def create(
        self,
        payload: CareerApplicationCreate,
        resume: UploadFile,
        *,
        ip_address: str | None,
    ) -> CareerApplication:
        resume_path = await self.uploads.save(
            resume,
            category="resumes",
            allowed_extensions={".pdf", ".doc", ".docx"},
        )
        application = CareerApplication(
            full_name=payload.full_name.strip(),
            email=str(payload.email).lower(),
            phone=payload.phone,
            role_applied=payload.role_applied.strip(),
            linkedin_url=payload.linkedin_url,
            portfolio_url=payload.portfolio_url,
            cover_letter=payload.cover_letter,
            resume_path=resume_path,
            ip_address=ip_address,
            status="new",
        )
        saved = self.repo.add(application)
        self.email.send_career_notification(saved)
        return saved

    def list_for_admin(self, *, page: int, page_size: int) -> tuple[list[CareerApplication], int]:
        return self.repo.list_applications(page=page, page_size=page_size)


class HostService:
    def __init__(self, db: Session) -> None:
        self.repo = HostRepository(db)
        self.email = EmailService()

    def register(self, payload: HostCreate, *, ip_address: str | None) -> HostRegistration:
        entity = HostRegistration(
            full_name=payload.full_name.strip(),
            email=str(payload.email).lower(),
            phone=payload.phone,
            city=payload.city.strip(),
            state=payload.state.strip(),
            identity_type=payload.identity_type.strip(),
            identity_number=payload.identity_number.strip(),
            experience_summary=payload.experience_summary.strip(),
            ip_address=ip_address,
        )
        saved = self.repo.add(entity)
        self.email.send_host_registration(saved)
        return saved

    def list_for_admin(self, *, page: int, page_size: int) -> tuple[list[HostRegistration], int]:
        return self.repo.list_hosts(page=page, page_size=page_size)

    def update_approval(self, host_id: UUID, payload: ApprovalUpdate) -> HostRegistration:
        if payload.approval_status not in APPROVAL_STATUSES:
            raise AppError("Invalid approval status")
        host = self.repo.get_by_id(host_id)
        if not host:
            raise NotFoundError("Host registration not found")
        host.approval_status = payload.approval_status
        host.admin_notes = payload.admin_notes
        self.repo.db.add(host)
        self.repo.db.commit()
        self.repo.db.refresh(host)
        return host


class CreatorService:
    def __init__(self, db: Session) -> None:
        self.repo = CreatorRepository(db)
        self.email = EmailService()

    def register(self, payload: CreatorCreate, *, ip_address: str | None) -> CreatorRegistration:
        entity = CreatorRegistration(
            full_name=payload.full_name.strip(),
            email=str(payload.email).lower(),
            phone=payload.phone,
            category=payload.category.strip(),
            portfolio_url=payload.portfolio_url,
            bio=payload.bio.strip(),
            ip_address=ip_address,
        )
        saved = self.repo.add(entity)
        self.email.send_creator_registration(saved)
        return saved

    def list_for_admin(self, *, page: int, page_size: int) -> tuple[list[CreatorRegistration], int]:
        return self.repo.list_creators(page=page, page_size=page_size)

    def update_approval(self, creator_id: UUID, payload: ApprovalUpdate) -> CreatorRegistration:
        creator = self.repo.get_by_id(creator_id)
        if not creator:
            raise NotFoundError("Creator registration not found")
        creator.approval_status = payload.approval_status
        creator.admin_notes = payload.admin_notes
        self.repo.db.add(creator)
        self.repo.db.commit()
        self.repo.db.refresh(creator)
        return creator


class BlogService:
    def __init__(self, db: Session) -> None:
        self.repo = BlogRepository(db)

    def create_post(self, payload: BlogPostCreate, *, author_id: UUID | None) -> BlogPost:
        if self.repo.get_by_slug(payload.slug):
            raise AppError("Slug already exists", status_code=409)
        post = BlogPost(
            title=payload.title,
            slug=payload.slug,
            excerpt=payload.excerpt,
            content=payload.content,
            category_id=payload.category_id,
            author_id=author_id,
            is_published=payload.is_published,
            seo_title=payload.seo_title,
            seo_description=payload.seo_description,
            seo_keywords=payload.seo_keywords,
        )
        saved = self.repo.add(post)
        for tag_id in payload.tag_ids:
            self.repo.db.add(BlogPostTag(post_id=saved.id, tag_id=tag_id))
        self.repo.db.commit()
        self.repo.db.refresh(saved)
        return saved

    def update_post(self, post_id: UUID, payload: BlogPostUpdate) -> BlogPost:
        post = self.repo.get_by_id(post_id)
        if not post:
            raise NotFoundError("Blog post not found")
        data = payload.model_dump(exclude_unset=True)
        for key, value in data.items():
            setattr(post, key, value)
        self.repo.db.add(post)
        self.repo.db.commit()
        self.repo.db.refresh(post)
        return post

    def delete_post(self, post_id: UUID) -> None:
        post = self.repo.get_by_id(post_id)
        if not post:
            raise NotFoundError("Blog post not found")
        self.repo.soft_delete(post)

    def get_by_slug(self, slug: str, *, published_only: bool = True) -> BlogPost:
        post = self.repo.get_by_slug(slug)
        if not post or (published_only and not post.is_published):
            raise NotFoundError("Blog post not found")
        return post

    def list_posts(
        self, *, page: int, page_size: int, published_only: bool
    ) -> tuple[list[BlogPost], int]:
        return self.repo.list_posts(page=page, page_size=page_size, published_only=published_only)

    def create_category(self, payload: BlogCategoryCreate) -> BlogCategory:
        if self.repo.get_category_by_slug(payload.slug):
            raise AppError("Category slug already exists", status_code=409)
        category = BlogCategory(
            name=payload.name, slug=payload.slug, description=payload.description
        )
        self.repo.db.add(category)
        self.repo.db.commit()
        self.repo.db.refresh(category)
        return category

    def create_tag(self, payload: BlogTagCreate) -> BlogTag:
        if self.repo.get_tag_by_slug(payload.slug):
            raise AppError("Tag slug already exists", status_code=409)
        tag = BlogTag(name=payload.name, slug=payload.slug)
        self.repo.db.add(tag)
        self.repo.db.commit()
        self.repo.db.refresh(tag)
        return tag

    def list_categories(self) -> list[BlogCategory]:
        return self.repo.list_categories()

    def list_tags(self) -> list[BlogTag]:
        return self.repo.list_tags()
