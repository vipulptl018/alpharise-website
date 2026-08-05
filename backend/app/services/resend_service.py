"""Resend HTTPS email delivery (api.resend.com — Render Free compatible)."""

from __future__ import annotations

import html
from typing import Any

import resend
from resend.exceptions import ResendError

from app.core.config import Settings, get_settings
from app.core.exceptions import AppError
from app.core.logging import get_logger

logger = get_logger(__name__)


class ResendService:
    def __init__(self, settings: Settings | None = None) -> None:
        self.settings = settings or get_settings()

    def _configure(self) -> None:
        api_key = (self.settings.resend_api_key or "").strip()
        if not api_key:
            raise AppError(
                "Resend Error: RESEND_API_KEY is not configured.",
                status_code=502,
            )
        # Official SDK: Authorization: Bearer <api_key> → https://api.resend.com
        resend.api_key = api_key

    def send(
        self,
        *,
        to: str,
        subject: str,
        text: str,
        html_body: str | None = None,
        reply_to: str | None = None,
        from_email: str | None = None,
    ) -> dict[str, Any]:
        """Send one email via resend.Emails.send (HTTPS)."""
        self._configure()

        from_addr = (from_email or self.settings.resend_from or "").strip()
        to_email = (to or "").strip()
        reply = (reply_to or "").strip() or None

        if not from_addr:
            raise AppError(
                "Resend Error: RESEND_FROM is not configured.",
                status_code=502,
            )
        if not to_email:
            raise AppError(
                "Resend Error: CONTACT_NOTIFY_EMAIL / recipient is empty.",
                status_code=502,
            )

        params: dict[str, Any] = {
            "from": from_addr,
            "to": [to_email],
            "subject": subject,
            "text": text,
        }
        if html_body:
            params["html"] = html_body
        if reply:
            params["reply_to"] = reply

        logger.info("Sending email via Resend")
        logger.info("FROM=%s", from_addr)
        logger.info("TO=%s", to_email)
        logger.info("SUBJECT=%s", subject)
        logger.info("REPLY_TO=%s", reply)

        try:
            result = resend.Emails.send(params)
        except ResendError as e:
            logger.exception("Resend email failed")
            raise AppError(
                f"Resend Error: {str(e)}", status_code=502
            ) from e
        except Exception as e:
            logger.exception("Resend email failed")
            raise AppError(
                f"Resend Error: {str(e)}", status_code=502
            ) from e

        logger.info("%s", result)
        if isinstance(result, dict):
            return result
        return {"id": getattr(result, "id", None)}

    send_email = send

    def send_contact_notification(self, inquiry: object) -> dict[str, Any]:
        full_name = str(getattr(inquiry, "full_name", "") or "")
        email = str(getattr(inquiry, "email", "") or "")
        phone = str(getattr(inquiry, "phone", "") or "")
        company = str(getattr(inquiry, "company", None) or "N/A")
        subject = str(getattr(inquiry, "subject", "") or "")
        message = str(getattr(inquiry, "message", "") or "")

        text = (
            f"Full Name:\n{full_name}\n\n"
            f"Email:\n{email}\n\n"
            f"Phone:\n{phone}\n\n"
            f"Company:\n{company}\n\n"
            f"Subject:\n{subject}\n\n"
            f"Message:\n{message}\n"
        )

        html_body = (
            "<h2>New Contact Form Submission</h2>"
            f"<p><strong>Full Name:</strong> {html.escape(full_name)}</p>"
            f"<p><strong>Email:</strong> {html.escape(email)}</p>"
            f"<p><strong>Phone:</strong> {html.escape(phone)}</p>"
            f"<p><strong>Company:</strong> {html.escape(company)}</p>"
            f"<p><strong>Subject:</strong> {html.escape(subject)}</p>"
            f"<p><strong>Message:</strong></p>"
            f"<p>{html.escape(message)}</p>"
        )

        return self.send(
            to=self.settings.contact_notify_email,
            subject="New Contact Form Submission",
            text=text,
            html_body=html_body,
            reply_to=email if email else None,
        )
