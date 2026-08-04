from math import ceil

from app.schemas.common import PaginatedResponse


def paginated(items: list, total: int, page: int, page_size: int) -> PaginatedResponse:
    pages = ceil(total / page_size) if page_size else 0
    return PaginatedResponse(
        items=items,
        total=total,
        page=page,
        page_size=page_size,
        pages=pages,
    )
