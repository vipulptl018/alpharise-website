"""Social Voice Phase 2 — API structure only (no calling features)."""

from fastapi import APIRouter

from app.deps.auth import CurrentUser, StaffUser
from app.schemas import MessageResponse

router = APIRouter(prefix="/social-voice", tags=["Social Voice (Phase 2)"])


@router.get("/status", response_model=MessageResponse)
def social_voice_status(_: CurrentUser) -> MessageResponse:
    return MessageResponse(
        success=True,
        message=(
            "Social Voice platform APIs are scaffolded for Phase 2. "
            "Calling functionality is not enabled yet. "
            "Database models exist for profiles, wallets, coins, gifts, "
            "leaderboards, notifications, reports, blocks, withdrawals, "
            "call history, and community reports."
        ),
    )


@router.get("/admin/overview", response_model=MessageResponse)
def social_voice_admin_overview(_: StaffUser) -> MessageResponse:
    return MessageResponse(
        success=True,
        message=(
            "Admin Social Voice overview endpoint is reserved for Phase 2. "
            "Use dashboard stats for current website leads and registrations."
        ),
    )
