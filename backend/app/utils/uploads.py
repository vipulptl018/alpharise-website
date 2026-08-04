import re
from pathlib import Path
from uuid import uuid4

import aiofiles
from fastapi import UploadFile

from app.core.config import get_settings
from app.core.exceptions import AppError

SAFE_NAME = re.compile(r"[^a-zA-Z0-9._-]+")


class UploadService:
    def __init__(self) -> None:
        self.settings = get_settings()
        self.base = Path(self.settings.upload_dir)
        self.base.mkdir(parents=True, exist_ok=True)
        for folder in ("resumes", "images", "documents"):
            (self.base / folder).mkdir(parents=True, exist_ok=True)

    async def save(
        self,
        file: UploadFile,
        *,
        category: str,
        allowed_extensions: set[str],
    ) -> str:
        if not file.filename:
            raise AppError("Filename is required")

        extension = Path(file.filename).suffix.lower()
        if extension not in allowed_extensions:
            allowed = ", ".join(sorted(allowed_extensions))
            raise AppError(f"Unsupported file type. Allowed: {allowed}")

        content = await file.read()
        if not content:
            raise AppError("Uploaded file is empty")
        if len(content) > self.settings.max_upload_bytes:
            raise AppError(
                f"File exceeds maximum size of {self.settings.max_upload_size_mb}MB"
            )

        safe_stem = SAFE_NAME.sub("-", Path(file.filename).stem)[:40] or "file"
        filename = f"{uuid4().hex}_{safe_stem}{extension}"
        destination = self.base / category / filename

        async with aiofiles.open(destination, "wb") as handle:
            await handle.write(content)

        return str(Path(category) / filename)
