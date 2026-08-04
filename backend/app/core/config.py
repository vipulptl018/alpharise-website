from functools import lru_cache

from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    app_name: str = "ALPHARISE API"
    app_env: str = "production"
    app_debug: bool = False
    app_version: str = "1.0.0"
    api_v1_prefix: str = "/api/v1"

    secret_key: str = Field(..., min_length=32)
    access_token_expire_minutes: int = 30
    refresh_token_expire_days: int = 14
    password_reset_token_expire_minutes: int = 60
    jwt_algorithm: str = "HS256"

    host: str = "0.0.0.0"
    port: int = 8000

    database_url: str = Field(
        default="postgresql+psycopg2://postgres:postgres@localhost:5432/alpharise"
    )
    redis_url: str | None = "redis://localhost:6379/0"

    cors_origins: str = (
        "http://localhost:3000,"
        "https://alphariseinnovation.com,"
        "https://www.alphariseinnovation.com"
    )

    rate_limit_default: str = "60/minute"
    rate_limit_auth: str = "10/minute"
    rate_limit_public: str = "20/minute"

    smtp_host: str = "smtp.example.com"
    smtp_port: int = 587
    smtp_username: str = ""
    smtp_password: str = ""
    smtp_use_tls: bool = True
    smtp_from_email: str = "noreply@alphariseinnovation.com"
    smtp_from_name: str = "ALPHARISE"
    contact_notify_email: str = "admin@alphariseinnovation.com"
    hr_notify_email: str = "admin@alphariseinnovation.com"

    upload_dir: str = "uploads"
    max_upload_size_mb: int = 10

    bootstrap_admin_email: str = "admin@alphariseinnovation.com"
    bootstrap_admin_password: str = "ChangeMeAdmin123!"
    bootstrap_admin_full_name: str = "ALPHARISE Admin"

    log_level: str = "INFO"

    @field_validator("cors_origins", mode="before")
    @classmethod
    def normalize_cors(cls, value: object) -> str:
        if isinstance(value, list):
            return ",".join(str(item) for item in value)
        return str(value or "")

    @field_validator("redis_url", mode="before")
    @classmethod
    def empty_redis_to_none(cls, value: object) -> object:
        if value is None:
            return None
        if isinstance(value, str) and not value.strip():
            return None
        return value

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    @property
    def is_production(self) -> bool:
        return self.app_env.lower() == "production"

    @property
    def max_upload_bytes(self) -> int:
        return self.max_upload_size_mb * 1024 * 1024


@lru_cache
def get_settings() -> Settings:
    return Settings()
