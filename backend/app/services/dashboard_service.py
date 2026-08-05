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
    """Liveness/readiness for Render: app process + database only."""

    def __init__(self, db: Session) -> None:
        self.db = db
        self.settings = get_settings()

    def check(self) -> HealthResponse:
        components: list[HealthComponent] = [
            HealthComponent(name="application", status="ok"),
        ]

        try:
            self.db.execute(text("SELECT 1"))
            components.append(HealthComponent(name="database", status="ok"))
        except Exception as exc:
            components.append(
                HealthComponent(name="database", status="error", detail=str(exc))
            )

        overall = "ok" if all(c.status == "ok" for c in components) else "degraded"
        return HealthResponse(
            status=overall,
            version=self.settings.app_version,
            components=components,
        )
