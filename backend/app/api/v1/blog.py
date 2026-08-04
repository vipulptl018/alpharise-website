from uuid import UUID

from fastapi import APIRouter, status

from app.core.exceptions import AppError, to_http_exception
from app.deps.auth import DbSession, StaffUser
from app.schemas import (
    BlogCategoryCreate,
    BlogCategoryRead,
    BlogPostCreate,
    BlogPostRead,
    BlogPostUpdate,
    BlogTagCreate,
    BlogTagRead,
    MessageResponse,
)
from app.schemas.common import PaginatedResponse
from app.services.content_service import BlogService
from app.utils.pagination import paginated

router = APIRouter(prefix="/blog", tags=["Blog"])


@router.get("/posts", response_model=PaginatedResponse[BlogPostRead])
def list_published_posts(
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[BlogPostRead]:
    items, total = BlogService(db).list_posts(
        page=page, page_size=page_size, published_only=True
    )
    return paginated([BlogPostRead.model_validate(i) for i in items], total, page, page_size)


@router.get("/posts/{slug}", response_model=BlogPostRead)
def get_post(slug: str, db: DbSession) -> BlogPostRead:
    try:
        post = BlogService(db).get_by_slug(slug, published_only=True)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return BlogPostRead.model_validate(post)


@router.get("/categories", response_model=list[BlogCategoryRead])
def list_categories(db: DbSession) -> list[BlogCategoryRead]:
    return [BlogCategoryRead.model_validate(c) for c in BlogService(db).list_categories()]


@router.get("/tags", response_model=list[BlogTagRead])
def list_tags(db: DbSession) -> list[BlogTagRead]:
    return [BlogTagRead.model_validate(t) for t in BlogService(db).list_tags()]


@router.post("/posts", response_model=BlogPostRead, status_code=status.HTTP_201_CREATED)
def create_post(
    payload: BlogPostCreate,
    user: StaffUser,
    db: DbSession,
) -> BlogPostRead:
    try:
        post = BlogService(db).create_post(payload, author_id=user.id)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return BlogPostRead.model_validate(post)


@router.patch("/posts/{post_id}", response_model=BlogPostRead)
def update_post(
    post_id: UUID,
    payload: BlogPostUpdate,
    _: StaffUser,
    db: DbSession,
) -> BlogPostRead:
    try:
        post = BlogService(db).update_post(post_id, payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return BlogPostRead.model_validate(post)


@router.delete("/posts/{post_id}", response_model=MessageResponse)
def delete_post(post_id: UUID, _: StaffUser, db: DbSession) -> MessageResponse:
    try:
        BlogService(db).delete_post(post_id)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return MessageResponse(success=True, message="Blog post deleted.")


@router.post("/categories", response_model=BlogCategoryRead, status_code=status.HTTP_201_CREATED)
def create_category(
    payload: BlogCategoryCreate, _: StaffUser, db: DbSession
) -> BlogCategoryRead:
    try:
        category = BlogService(db).create_category(payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return BlogCategoryRead.model_validate(category)


@router.post("/tags", response_model=BlogTagRead, status_code=status.HTTP_201_CREATED)
def create_tag(payload: BlogTagCreate, _: StaffUser, db: DbSession) -> BlogTagRead:
    try:
        tag = BlogService(db).create_tag(payload)
    except AppError as exc:
        raise to_http_exception(exc) from exc
    return BlogTagRead.model_validate(tag)


@router.get("/admin/posts", response_model=PaginatedResponse[BlogPostRead])
def list_all_posts(
    _: StaffUser,
    db: DbSession,
    page: int = 1,
    page_size: int = 20,
) -> PaginatedResponse[BlogPostRead]:
    items, total = BlogService(db).list_posts(
        page=page, page_size=page_size, published_only=False
    )
    return paginated([BlogPostRead.model_validate(i) for i in items], total, page, page_size)
