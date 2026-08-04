from contextlib import asynccontextmanager
from typing import Any

from fastapi import APIRouter, FastAPI, Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from sqlalchemy.exc import SQLAlchemyError

from app.api.v1 import api_router
from app.core.config import get_settings
from app.core.constants import ROLE_ADMIN
from app.core.logging import get_logger, setup_logging
from app.core.rate_limit import limiter
from app.core.security import hash_password
from app.database.session import SessionLocal
from app.deps.auth import DbSession
from app.middleware.security import RequestLoggingMiddleware, SecurityHeadersMiddleware
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas import HealthResponse
from app.services.dashboard_service import HealthService

setup_logging()
logger = get_logger(__name__)
settings = get_settings()


def bootstrap_admin() -> None:
    db = SessionLocal()
    try:
        repo = UserRepository(db)
        if repo.get_by_email(settings.bootstrap_admin_email):
            return
        admin = User(
            email=settings.bootstrap_admin_email.lower(),
            full_name=settings.bootstrap_admin_full_name,
            hashed_password=hash_password(settings.bootstrap_admin_password),
            role=ROLE_ADMIN,
            is_active=True,
        )
        repo.add(admin)
        logger.info("Bootstrap admin created email=%s", settings.bootstrap_admin_email)
    except Exception:
        logger.exception("Bootstrap admin skipped (database unavailable)")
    finally:
        db.close()


@asynccontextmanager
async def lifespan(_: FastAPI):
    logger.info("Starting %s v%s", settings.app_name, settings.app_version)
    bootstrap_admin()
    yield
    logger.info("Shutting down %s", settings.app_name)


async def rate_limit_handler(_: Request, __: RateLimitExceeded) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_429_TOO_MANY_REQUESTS,
        content={
            "success": False,
            "message": "Too many requests. Please wait a moment and try again.",
            "errors": None,
        },
    )


def create_app() -> FastAPI:
    application = FastAPI(
        title=settings.app_name,
        description=(
            "Production API for ALPHARISE INNOVATION PRIVATE LIMITED — "
            "corporate website, TechRise Academy, Social Voice (Phase 2), and admin dashboard."
        ),
        version=settings.app_version,
        docs_url="/docs",
        redoc_url="/redoc",
        openapi_url="/openapi.json",
        lifespan=lifespan,
    )

    application.state.limiter = limiter
    application.add_exception_handler(RateLimitExceeded, rate_limit_handler)
    application.add_middleware(SlowAPIMiddleware)
    application.add_middleware(RequestLoggingMiddleware)
    application.add_middleware(SecurityHeadersMiddleware)
    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origin_list,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allow_headers=["*"],
    )

    @application.exception_handler(RequestValidationError)
    async def validation_handler(
        _: Request, exc: RequestValidationError
    ) -> JSONResponse:
        errors: list[dict[str, Any]] = []
        for error in exc.errors():
            loc = ".".join(str(part) for part in error.get("loc", []) if part != "body")
            errors.append(
                {
                    "field": loc or "body",
                    "message": str(error.get("msg", "Invalid value")),
                    "type": str(error.get("type", "")),
                }
            )
        return JSONResponse(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            content={
                "success": False,
                "message": "Validation failed. Please check the submitted fields.",
                "errors": errors,
            },
        )

    @application.exception_handler(SQLAlchemyError)
    async def db_handler(_: Request, exc: SQLAlchemyError) -> JSONResponse:
        logger.exception("Database error: %s", exc)
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={
                "success": False,
                "message": "A database error occurred. Please try again later.",
                "errors": None,
            },
        )

    @application.exception_handler(Exception)
    async def unhandled_handler(_: Request, exc: Exception) -> JSONResponse:
        logger.exception("Unhandled error: %s", exc)
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={
                "success": False,
                "message": "An unexpected error occurred. Please try again later.",
                "errors": None,
            },
        )

    root_health = APIRouter(tags=["Health"])

    @root_health.get("/health", response_model=HealthResponse)
    def root_health_check(db: DbSession) -> HealthResponse:
        return HealthService(db).check()

    application.include_router(root_health)
    application.include_router(api_router, prefix=settings.api_v1_prefix)
    return application


app = create_app()
