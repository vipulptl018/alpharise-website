FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PORT=8000 \
    WEB_CONCURRENCY=1 \
    FORWARDED_ALLOW_IPS=*

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential libpq-dev curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

# Ephemeral on Render Free — Contact API does not require persistent uploads.
RUN mkdir -p uploads/resumes uploads/images uploads/documents

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD sh -c "curl -f http://localhost:${PORT:-8000}/health || exit 1"

# Render Free production start (exact):
# alembic upgrade head && gunicorn -k uvicorn.workers.UvicornWorker -w 1 -b 0.0.0.0:$PORT app.main:app
CMD ["sh", "-c", "alembic upgrade head && gunicorn -k uvicorn.workers.UvicornWorker -w 1 -b 0.0.0.0:${PORT} app.main:app --timeout 120 --access-logfile - --error-logfile - --capture-output"]
