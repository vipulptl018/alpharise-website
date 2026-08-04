import re
from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, EmailStr, Field, field_validator

from app.schemas.common import (
    MessageResponse as MessageResponse,
    ORMModel as ORMModel,
    PaginatedResponse as PaginatedResponse,
    TimestampSchema,
)

PHONE_PATTERN = re.compile(r"^[+\d][\d\s().-]{6,38}$")


def validate_phone(value: str) -> str:
    cleaned = value.strip()
    if not PHONE_PATTERN.match(cleaned):
        raise ValueError(
            "Phone must be 7–40 characters and contain digits, spaces, +, (), ., or -"
        )
    return cleaned


class ContactCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=120, examples=["Vipul Patil"])
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=40, examples=["+91 9168020295"])
    company: str | None = Field(default=None, max_length=160)
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10, max_length=5000)

    @field_validator("full_name", "subject", "message", mode="before")
    @classmethod
    def strip_text(cls, value: object) -> object:
        return value.strip() if isinstance(value, str) else value

    @field_validator("company", mode="before")
    @classmethod
    def normalize_company(cls, value: object) -> object:
        if value is None:
            return None
        if isinstance(value, str):
            cleaned = value.strip()
            return cleaned or None
        return value

    @field_validator("phone")
    @classmethod
    def phone_ok(cls, value: str) -> str:
        return validate_phone(value)


class ContactRead(TimestampSchema):
    full_name: str
    email: EmailStr
    phone: str
    company: str | None
    subject: str
    message: str
    ip_address: str | None
    status: str


class NewsletterCreate(BaseModel):
    email: EmailStr


class NewsletterRead(TimestampSchema):
    email: EmailStr
    is_active: bool
    source: str


class AcademyEnquiryCreate(BaseModel):
    enquiry_type: str = Field(..., pattern="^(course|student|demo)$")
    full_name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=40)
    course_interest: str | None = Field(default=None, max_length=160)
    preferred_schedule: str | None = Field(default=None, max_length=160)
    message: str = Field(..., min_length=10, max_length=5000)

    @field_validator("phone")
    @classmethod
    def phone_ok(cls, value: str) -> str:
        return validate_phone(value)


class AcademyEnquiryRead(TimestampSchema):
    enquiry_type: str
    full_name: str
    email: EmailStr
    phone: str
    course_interest: str | None
    preferred_schedule: str | None
    message: str
    status: str


class CareerApplicationCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=40)
    role_applied: str = Field(..., min_length=2, max_length=160)
    linkedin_url: str | None = Field(default=None, max_length=255)
    portfolio_url: str | None = Field(default=None, max_length=255)
    cover_letter: str | None = Field(default=None, max_length=5000)

    @field_validator("phone")
    @classmethod
    def phone_ok(cls, value: str) -> str:
        return validate_phone(value)


class CareerApplicationRead(TimestampSchema):
    full_name: str
    email: EmailStr
    phone: str
    role_applied: str
    linkedin_url: str | None
    portfolio_url: str | None
    cover_letter: str | None
    resume_path: str
    status: str


class HostCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=40)
    city: str = Field(..., min_length=2, max_length=100)
    state: str = Field(..., min_length=2, max_length=100)
    identity_type: str = Field(..., min_length=2, max_length=60)
    identity_number: str = Field(..., min_length=4, max_length=80)
    experience_summary: str = Field(..., min_length=20, max_length=5000)

    @field_validator("phone")
    @classmethod
    def phone_ok(cls, value: str) -> str:
        return validate_phone(value)


class HostRead(TimestampSchema):
    full_name: str
    email: EmailStr
    phone: str
    city: str
    state: str
    identity_type: str
    identity_number: str
    experience_summary: str
    approval_status: str
    admin_notes: str | None


class CreatorCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=40)
    category: str = Field(..., min_length=2, max_length=100)
    portfolio_url: str | None = Field(default=None, max_length=255)
    bio: str = Field(..., min_length=20, max_length=5000)

    @field_validator("phone")
    @classmethod
    def phone_ok(cls, value: str) -> str:
        return validate_phone(value)


class CreatorRead(TimestampSchema):
    full_name: str
    email: EmailStr
    phone: str
    category: str
    portfolio_url: str | None
    bio: str
    approval_status: str
    admin_notes: str | None


class ApprovalUpdate(BaseModel):
    approval_status: str = Field(..., pattern="^(pending|approved|rejected)$")
    admin_notes: str | None = Field(default=None, max_length=2000)


class UserLogin(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=128)


class UserRegister(BaseModel):
    email: EmailStr
    full_name: str = Field(..., min_length=2, max_length=160)
    password: str = Field(..., min_length=8, max_length=128)


class TokenPair(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class RefreshRequest(BaseModel):
    refresh_token: str


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class ResetPasswordRequest(BaseModel):
    token: str
    new_password: str = Field(..., min_length=8, max_length=128)


class UserRead(TimestampSchema):
    email: EmailStr
    full_name: str
    role: str
    is_active: bool
    last_login_at: datetime | None


class UserUpdateRole(BaseModel):
    role: str = Field(..., pattern="^(admin|staff|user)$")
    is_active: bool = True


class BlogPostCreate(BaseModel):
    title: str = Field(..., min_length=3, max_length=220)
    slug: str = Field(..., min_length=3, max_length=240, pattern=r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
    excerpt: str = Field(..., min_length=10, max_length=500)
    content: str = Field(..., min_length=20)
    category_id: UUID | None = None
    is_published: bool = False
    seo_title: str | None = Field(default=None, max_length=220)
    seo_description: str | None = Field(default=None, max_length=320)
    seo_keywords: str | None = Field(default=None, max_length=320)
    tag_ids: list[UUID] = Field(default_factory=list)


class BlogPostUpdate(BaseModel):
    title: str | None = Field(default=None, min_length=3, max_length=220)
    excerpt: str | None = Field(default=None, min_length=10, max_length=500)
    content: str | None = Field(default=None, min_length=20)
    category_id: UUID | None = None
    is_published: bool | None = None
    seo_title: str | None = Field(default=None, max_length=220)
    seo_description: str | None = Field(default=None, max_length=320)
    seo_keywords: str | None = Field(default=None, max_length=320)


class BlogPostRead(TimestampSchema):
    title: str
    slug: str
    excerpt: str
    content: str
    cover_image_path: str | None
    category_id: UUID | None
    author_id: UUID | None
    is_published: bool
    seo_title: str | None
    seo_description: str | None
    seo_keywords: str | None


class BlogCategoryCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    slug: str = Field(..., min_length=2, max_length=140, pattern=r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
    description: str | None = None


class BlogCategoryRead(TimestampSchema):
    name: str
    slug: str
    description: str | None


class BlogTagCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=80)
    slug: str = Field(..., min_length=2, max_length=100, pattern=r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


class BlogTagRead(TimestampSchema):
    name: str
    slug: str


class DashboardStats(BaseModel):
    contacts: int
    newsletter_subscribers: int
    academy_enquiries: int
    career_applications: int
    hosts: int
    creators: int
    blog_posts: int
    active_users: int


class HealthComponent(BaseModel):
    name: str
    status: str
    detail: str | None = None


class HealthResponse(BaseModel):
    status: str
    version: str
    components: list[HealthComponent]
