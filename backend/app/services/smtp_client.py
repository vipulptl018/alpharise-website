import smtplib
import socket
from email.message import EmailMessage
from email.utils import formataddr

from app.core.config import Settings
from app.core.exceptions import AppError
from app.core.logging import get_logger

logger = get_logger(__name__)


class SmtpClient:
    def __init__(self, settings: Settings) -> None:
        self.settings = settings

    def send(
        self,
        *,
        to_email: str,
        subject: str,
        text_body: str,
        html_body: str | None = None,
        reply_to: str | None = None,
    ) -> None:
        message = EmailMessage()
        message["Subject"] = subject
        message["From"] = formataddr(
            (self.settings.smtp_from_name, self.settings.smtp_from_email)
        )
        message["To"] = to_email
        if reply_to:
            message["Reply-To"] = reply_to
        message.set_content(text_body)
        if html_body:
            message.add_alternative(html_body, subtype="html")

        try:
            with smtplib.SMTP(
                self.settings.smtp_host, self.settings.smtp_port, timeout=20
            ) as smtp:
                if self.settings.smtp_use_tls:
                    smtp.starttls()
                if self.settings.smtp_username:
                    smtp.login(self.settings.smtp_username, self.settings.smtp_password)
                smtp.send_message(message)
            logger.info("Email sent to=%s subject=%s", to_email, subject)
        except (smtplib.SMTPException, OSError, socket.error) as exc:
            logger.exception("SMTP failure to=%s: %s", to_email, exc)
            raise AppError(
                "Email delivery failed. Please try again later.",
                status_code=502,
            ) from exc

    def ping(self) -> bool:
        try:
            with smtplib.SMTP(
                self.settings.smtp_host, self.settings.smtp_port, timeout=5
            ) as smtp:
                smtp.noop()
            return True
        except Exception:
            logger.exception("SMTP health check failed")
            return False
