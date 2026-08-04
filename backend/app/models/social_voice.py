"""Social Voice Communication Platform — Phase 2 schema (no calling features yet)."""

from datetime import datetime
from decimal import Decimal
from uuid import UUID, uuid4

from sqlalchemy import (
    Boolean,
    DateTime,
    ForeignKey,
    Integer,
    Numeric,
    String,
    Text,
    UniqueConstraint,
)
from sqlalchemy.dialects.postgresql import UUID as PGUUID
from sqlalchemy.orm import Mapped, mapped_column

from app.core.constants import APPROVAL_PENDING
from app.database.base import Base, SoftDeleteMixin, TimestampMixin


class SocialProfile(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_profiles"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    user_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False
    )
    display_name: Mapped[str] = mapped_column(String(120), nullable=False)
    bio: Mapped[str | None] = mapped_column(Text, nullable=True)
    avatar_path: Mapped[str | None] = mapped_column(String(500), nullable=True)
    is_host: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_creator: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    is_verified: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)


class Wallet(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_wallets"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    user_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False
    )
    coin_balance: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    currency_balance: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False, default=0)
    is_frozen: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)


class CoinPackage(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_coin_packages"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    coins: Mapped[int] = mapped_column(Integer, nullable=False)
    price_inr: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, index=True)
    sort_order: Mapped[int] = mapped_column(Integer, nullable=False, default=0)


class WalletTransaction(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_wallet_transactions"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    wallet_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("sv_wallets.id", ondelete="CASCADE"), nullable=False, index=True
    )
    tx_type: Mapped[str] = mapped_column(String(40), nullable=False, index=True)
    coins: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    amount_inr: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False, default=0)
    reference: Mapped[str | None] = mapped_column(String(120), nullable=True)
    meta_json: Mapped[str | None] = mapped_column(Text, nullable=True)


class GiftCatalogItem(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_gift_catalog"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    coin_cost: Mapped[int] = mapped_column(Integer, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)


class GiftEvent(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_gift_events"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    sender_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    receiver_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    gift_id: Mapped[UUID] = mapped_column(
        PGUUID(as_uuid=True), ForeignKey("sv_gift_catalog.id"), nullable=False
    )
    coins_spent: Mapped[int] = mapped_column(Integer, nullable=False)


class LeaderboardEntry(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_leaderboard_entries"
    __table_args__ = (
        UniqueConstraint("period", "user_id", "metric", name="uq_sv_leaderboard_period_user_metric"),
    )

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    period: Mapped[str] = mapped_column(String(32), nullable=False, index=True)
    user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    metric: Mapped[str] = mapped_column(String(40), nullable=False)
    score: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    rank: Mapped[int | None] = mapped_column(Integer, nullable=True)


class Notification(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_notifications"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    title: Mapped[str] = mapped_column(String(160), nullable=False)
    body: Mapped[str] = mapped_column(Text, nullable=False)
    is_read: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False, index=True)
    category: Mapped[str] = mapped_column(String(40), nullable=False, default="general")


class UserReport(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_user_reports"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    reporter_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    reported_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    reason: Mapped[str] = mapped_column(String(120), nullable=False)
    details: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(String(32), nullable=False, default=APPROVAL_PENDING, index=True)


class UserBlock(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_user_blocks"
    __table_args__ = (
        UniqueConstraint("blocker_user_id", "blocked_user_id", name="uq_sv_user_block"),
    )

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    blocker_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    blocked_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)


class WithdrawalRequest(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_withdrawal_requests"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    amount_inr: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
    payout_method: Mapped[str] = mapped_column(String(60), nullable=False)
    payout_details: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(String(32), nullable=False, default=APPROVAL_PENDING, index=True)
    admin_notes: Mapped[str | None] = mapped_column(Text, nullable=True)


class CallHistory(Base, TimestampMixin, SoftDeleteMixin):
    """Prepared for Phase 2 calling — schema only, no live calling logic."""

    __tablename__ = "sv_call_history"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    caller_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    callee_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    started_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    ended_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    duration_seconds: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    status: Mapped[str] = mapped_column(String(32), nullable=False, default="scheduled", index=True)


class CommunityReport(Base, TimestampMixin, SoftDeleteMixin):
    __tablename__ = "sv_community_reports"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    reporter_user_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False, index=True)
    target_type: Mapped[str] = mapped_column(String(40), nullable=False)
    target_id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), nullable=False)
    reason: Mapped[str] = mapped_column(String(120), nullable=False)
    details: Mapped[str] = mapped_column(Text, nullable=False)
    status: Mapped[str] = mapped_column(String(32), nullable=False, default=APPROVAL_PENDING, index=True)


class AuditLog(Base, TimestampMixin):
    __tablename__ = "audit_logs"

    id: Mapped[UUID] = mapped_column(PGUUID(as_uuid=True), primary_key=True, default=uuid4)
    actor_user_id: Mapped[UUID | None] = mapped_column(PGUUID(as_uuid=True), nullable=True, index=True)
    action: Mapped[str] = mapped_column(String(80), nullable=False, index=True)
    resource: Mapped[str] = mapped_column(String(80), nullable=False, index=True)
    resource_id: Mapped[str | None] = mapped_column(String(64), nullable=True)
    ip_address: Mapped[str | None] = mapped_column(String(64), nullable=True)
    details: Mapped[str | None] = mapped_column(Text, nullable=True)
