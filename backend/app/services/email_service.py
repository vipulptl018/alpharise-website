from pathlib import Path

from jinja2 import Environment, FileSystemLoader, select_autoescape

from app.core.config import Settings, get_settings
from app.core.logging import get_logger
from app.services.resend_service import ResendService

logger = get_logger(__name__)

TEMPLATE_DIR = Path(__file__).resolve().parent.parent / "emails" / "templates"


class EmailService:
    """Template-based emails delivered via Resend HTTPS API."""

    def __init__(self, settings: Settings | None = None) -> None:
        self.settings = settings or get_settings()
        self._resend: ResendService | None = None
        self.env = Environment(
            loader=FileSystemLoader(str(TEMPLATE_DIR)),
            autoescape=select_autoescape(["html", "xml"]),
        )

    @property
    def resend(self) -> ResendService:
        if self._resend is None:
            self._resend = ResendService(self.settings)
        return self._resend

    def _render(self, template_name: str, context: dict) -> tuple[str, str]:
        html = self.env.get_template(template_name).render(**context)
        text = self.env.get_template(template_name.replace(".html", ".txt")).render(**context)
        return html, text

    def send_contact_notification(self, inquiry: object) -> None:
        self.resend.send_contact_notification(inquiry)

    def send_newsletter_welcome(self, email: str) -> None:
        html, text = self._render(
            "newsletter_welcome.html",
            {"email": email, "site": "https://alphariseinnovation.com"},
        )
        self.resend.send(
            to=email,
            subject="Welcome to ALPHARISE updates",
            text=text,
            html_body=html,
        )

    def send_career_notification(self, application: object) -> None:
        html, text = self._render(
            "career_hr.html",
            {"application": application},
        )
        self.resend.send(
            to=self.settings.hr_notify_email,
            subject=f"[Career] {getattr(application, 'role_applied')} — {getattr(application, 'full_name')}",
            text=text,
            html_body=html,
            reply_to=getattr(application, "email"),
        )

    def send_host_registration(self, registration: object) -> None:
        html, text = self._render("host_registration.html", {"registration": registration})
        self.resend.send(
            to=self.settings.contact_notify_email,
            subject=f"[Host Registration] {getattr(registration, 'full_name')}",
            text=text,
            html_body=html,
            reply_to=getattr(registration, "email"),
        )
        self.resend.send(
            to=getattr(registration, "email"),
            subject="Host registration received — ALPHARISE",
            text=text,
            html_body=html,
        )

    def send_creator_registration(self, registration: object) -> None:
        html, text = self._render("creator_registration.html", {"registration": registration})
        self.resend.send(
            to=self.settings.contact_notify_email,
            subject=f"[Creator Registration] {getattr(registration, 'full_name')}",
            text=text,
            html_body=html,
            reply_to=getattr(registration, "email"),
        )
        self.resend.send(
            to=getattr(registration, "email"),
            subject="Creator registration received — ALPHARISE",
            text=text,
            html_body=html,
        )

    def send_password_reset(self, email: str, reset_token: str) -> None:
        reset_url = f"https://alphariseinnovation.com/reset-password?token={reset_token}"
        html, text = self._render(
            "password_reset.html",
            {"email": email, "reset_url": reset_url, "token": reset_token},
        )
        self.resend.send(
            to=email,
            subject="Reset your ALPHARISE password",
            text=text,
            html_body=html,
        )
