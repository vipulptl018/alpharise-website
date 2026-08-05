import smtplib
import socket
from contextlib import contextmanager
from email.message import EmailMessage
from email.utils import formataddr
from typing import Iterator

from app.core.config import Settings
from app.core.exceptions import AppError
from app.core.logging import get_logger

logger = get_logger(__name__)


class SmtpClient:
    def __init__(self, settings: Settings) -> None:
        self.settings = settings

    @contextmanager
    def _connection(self, *, timeout: float) -> Iterator[smtplib.SMTP]:
        """Open an SMTP connection with Gmail-compatible STARTTLS or SSL."""
        smtp: smtplib.SMTP | None = None
        try:
            if self.settings.smtp_use_ssl:
                smtp = smtplib.SMTP_SSL(
                    self.settings.smtp_host, self.settings.smtp_port, timeout=timeout
                )
            else:
                smtp = smtplib.SMTP(
                    self.settings.smtp_host, self.settings.smtp_port, timeout=timeout
                )
                if self.settings.smtp_use_tls:
                    smtp.ehlo()
                    smtp.starttls()
                    smtp.ehlo()
            yield smtp
        finally:
            if smtp is not None:
                try:
                    smtp.quit()
                except Exception:
                    try:
                        smtp.close()
                    except Exception:
                        pass

    def _authenticate(self, smtp: smtplib.SMTP) -> None:
        username = (self.settings.smtp_username or "").strip()
        password = self.settings.smtp_password or ""
        if username and password:
            smtp.login(username, password)

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
            with self._connection(timeout=20) as smtp:
                self._authenticate(smtp)
                smtp.send_message(message)
            logger.info(
                "Email sent to=%s subject=%s from=%s host=%s",
                to_email,
                subject,
                self.settings.smtp_from_email,
                self.settings.smtp_host,
            )
        except (smtplib.SMTPException, OSError, socket.error) as exc:
            # Never log SMTP_PASSWORD. Log the failure; do not crash the process.
            logger.exception(
                "SMTP send failed to=%s host=%s",
                to_email,
                self.settings.smtp_host,
            )
            raise AppError(
                "Email delivery failed. Please try again later.",
                status_code=502,
            ) from exc
