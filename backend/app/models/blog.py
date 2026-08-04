from uuid import UUID, uuid4

from sqlalchemy import Boolean, ForeignKey, String, Text, UniqueConstraint
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base, SoftDeleteMixin, TimestampMixin


class BlogCategory(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "blog_categories"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    name: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    slug: Mapped[str] = mapped_column(String(140), unique=True, nullable=False, index=True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)

    posts: Mapped[list["BlogPost"]] = relationship(back_populates="category")


class BlogTag(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "blog_tags"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    name: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)
    slug: Mapped[str] = mapped_column(String(100), unique=True, nullable=False, index=True)


class BlogPostTag(Base):
    __tablename__ = "blog_post_tags"
    __table_args__ = (UniqueConstraint("post_id", "tag_id", name="uq_blog_post_tag"),)

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    post_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("blog_posts.id", ondelete="CASCADE"), nullable=False
    )
    tag_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("blog_tags.id", ondelete="CASCADE"), nullable=False
    )


class BlogPost(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "blog_posts"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    title: Mapped[str] = mapped_column(String(220), nullable=False)
    slug: Mapped[str] = mapped_column(String(240), unique=True, nullable=False, index=True)
    excerpt: Mapped[str] = mapped_column(String(500), nullable=False)
    content: Mapped[str] = mapped_column(Text, nullable=False)
    cover_image_path: Mapped[str | None] = mapped_column(String(500), nullable=True)
    author_id: Mapped[UUID | None] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True
    )
    category_id: Mapped[UUID | None] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("blog_categories.id", ondelete="SET NULL"), nullable=True
    )
    is_published: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False, index=True)
    seo_title: Mapped[str | None] = mapped_column(String(220), nullable=True)
    seo_description: Mapped[str | None] = mapped_column(String(320), nullable=True)
    seo_keywords: Mapped[str | None] = mapped_column(String(320), nullable=True)

    category: Mapped[BlogCategory | None] = relationship(back_populates="posts")
