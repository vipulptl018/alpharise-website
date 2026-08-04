from sqlalchemy import text
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.repositories.contact_repository import ContactRepository
from app.repositories.content_repository import (
    AcademyRepository,
    BlogRepository,
    CareerRepository,
    CreatorRepository,
    HostRepository,
)
from app.repositories.newsletter_repository import NewsletterRepository
from app.repositories.user_repository import UserRepository
from app.schemas import DashboardStats, HealthComponent, HealthResponse
from app.services.smtp_client import SmtpClient


class DashboardService:
    def __init__(self, db: Session) -> None:
        self.db = db

    def stats(self) -> DashboardStats:
        return DashboardStats(
            contacts=ContactRepository(self.db).count_all(),
            newsletter_subscribers=NewsletterRepository(self.db).count_active(),
            academy_enquiries=AcademyRepository(self.db).count_all(),
            career_applications=CareerRepository(self.db).count_all(),
            hosts=HostRepository(self.db).count_all(),
            creators=CreatorRepository(self.db).count_all(),
            blog_posts=BlogRepository(self.db).count_posts(),
            active_users=UserRepository(self.db).count_active(),
        )


class HealthService:
    def __init__(self, db: Session) -> None:
        self.db = db
        self.settings = get_settings()

    def check(self) -> HealthResponse:
        components: list[HealthComponent] = []

        try:
            self.db.execute(text("SELECT 1"))
            components.append(HealthComponent(name="database", status="ok"))
        except Exception as exc:
            components.append(
                HealthComponent(name="database", status="error", detail=str(exc))
            )

        if self.settings.redis_url:
            try:
                import redis

                client = redis.from_url(self.settings.redis_url, socket_connect_timeout=2)
                client.ping()
                components.append(HealthComponent(name="redis", status="ok"))
            except Exception as exc:
                components.append(
                    HealthComponent(name="redis", status="error", detail=str(exc))
                )
        else:
            components.append(
                HealthComponent(name="redis", status="disabled", detail="REDIS_URL not set")
            )

        smtp_ok = SmtpClient(self.settings).ping()
        components.append(
            HealthComponent(
                name="smtp",
                status="ok" if smtp_ok else "error",
                detail=None if smtp_ok else "SMTP unreachable",
            )
        )

        overall = "ok" if all(c.status in {"ok", "disabled"} for c in components) else "degraded"
        return HealthResponse(
            status=overall,
            version=self.settings.app_version,
            components=components,
        )
