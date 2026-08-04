from fastapi import Request


def get_client_ip(request: Request) -> str | None:
    forwarded = request.headers.get("x-forwarded-for")
    if forwarded:
        return forwarded.split(",")[0].strip() or None
    if request.client and request.client.host:
        return request.client.host
    return None


def get_user_agent(request: Request) -> str | None:
    value = request.headers.get("user-agent")
    return value[:500] if value else None
