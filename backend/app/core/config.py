from functools import lru_cache

from pydantic import AliasChoices, Field, field_validator, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
        populate_by_name=True,
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
    # Optional — leave unset on Render Free (Contact-only stack does not need Redis)
    redis_url: str | None = None

    cors_origins: str = (
        "http://localhost:3000,"
        "https://alphariseinnovation.com,"
        "https://www.alphariseinnovation.com"
    )
    # Allows Vercel preview deployments: https://*.vercel.app
    cors_origin_regex: str | None = r"https://.*\.vercel\.app"

    rate_limit_default: str = "60/minute"
    rate_limit_auth: str = "10/minute"
    rate_limit_public: str = "20/minute"

    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_username: str = "alphariseinnovations@gmail.com"
    smtp_password: str = ""
    smtp_use_tls: bool = True
    smtp_use_ssl: bool = False
    smtp_from_email: str = Field(
        default="alphariseinnovations@gmail.com",
        validation_alias=AliasChoices("SMTP_FROM", "SMTP_FROM_EMAIL", "smtp_from_email"),
    )
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

    @field_validator("database_url", mode="before")
    @classmethod
    def normalize_database_url(cls, value: object) -> object:
        """Accept Supabase/Render postgres:// URLs; force psycopg2 driver."""
        if not isinstance(value, str) or not value.strip():
            return value
        url = value.strip()
        if url.startswith("postgres://"):
            url = "postgresql://" + url[len("postgres://") :]
        if url.startswith("postgresql://"):
            url = "postgresql+psycopg2://" + url[len("postgresql://") :]
        return url

    @field_validator("redis_url", mode="before")
    @classmethod
    def empty_redis_to_none(cls, value: object) -> object:
        if value is None:
            return None
        if isinstance(value, str) and not value.strip():
            return None
        return value

    @field_validator("cors_origin_regex", mode="before")
    @classmethod
    def empty_cors_regex_to_none(cls, value: object) -> object:
        if value is None:
            return None
        if isinstance(value, str) and not value.strip():
            return None
        return value

    @model_validator(mode="after")
    def validate_smtp_transport(self) -> "Settings":
        if self.smtp_use_tls and self.smtp_use_ssl:
            raise ValueError("Set only one of SMTP_USE_TLS or SMTP_USE_SSL to true")
        return self

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    @property
    def is_production(self) -> bool:
        return self.app_env.lower() == "production"

    @property
    def max_upload_bytes(self) -> int:
        return self.max_upload_size_mb * 1024 * 1024

    def __repr__(self) -> str:
        """Never expose SMTP_PASSWORD (or other secrets) in repr/logs."""
        return (
            f"Settings(app_env={self.app_env!r}, smtp_host={self.smtp_host!r}, "
            f"smtp_port={self.smtp_port}, smtp_username={self.smtp_username!r}, "
            f"smtp_from={self.smtp_from_email!r}, smtp_password={'***' if self.smtp_password else ''})"
        )


@lru_cache
def get_settings() -> Settings:
    return Settings()
