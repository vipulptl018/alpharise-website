from fastapi import APIRouter

from app.deps.auth import DbSession
from app.schemas import HealthResponse
from app.services.dashboard_service import HealthService

router = APIRouter(tags=["Health"])


@router.get("/health", response_model=HealthResponse, summary="Service health check")
def health(db: DbSession) -> HealthResponse:
    return HealthService(db).check()
