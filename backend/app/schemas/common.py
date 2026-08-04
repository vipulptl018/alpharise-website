from datetime import datetime
from typing import Generic, TypeVar
from uuid import UUID

from pydantic import BaseModel, ConfigDict, EmailStr, Field

T = TypeVar("T")


class ORMModel(BaseModel):
    model_config = ConfigDict(from_attributes=True)


class MessageResponse(BaseModel):
    success: bool = True
    message: str


class ErrorResponse(BaseModel):
    success: bool = False
    message: str
    errors: list[dict[str, str]] | None = None


class PaginatedResponse(BaseModel, Generic[T]):
    items: list[T]
    total: int
    page: int
    page_size: int
    pages: int


class TimestampSchema(ORMModel):
    id: UUID
    created_at: datetime
    updated_at: datetime


class EmailOnly(BaseModel):
    email: EmailStr = Field(..., examples=["admin@alphariseinnovation.com"])
