from fastapi import APIRouter

from app.deps.auth import DbSession, StaffUser
from app.schemas import DashboardStats
from app.services.dashboard_service import DashboardService

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])


@router.get("/stats", response_model=DashboardStats, summary="Admin analytics overview")
def dashboard_stats(_: StaffUser, db: DbSession) -> DashboardStats:
    return DashboardService(db).stats()
