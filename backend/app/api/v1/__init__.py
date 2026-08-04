from fastapi import APIRouter

from app.api.v1 import (
    academy,
    auth,
    blog,
    career,
    contact,
    creator,
    dashboard,
    health,
    host,
    newsletter,
    social_voice,
    users,
)

api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(auth.router)
api_router.include_router(users.router)
api_router.include_router(contact.router)
api_router.include_router(newsletter.router)
api_router.include_router(academy.router)
api_router.include_router(career.router)
api_router.include_router(host.router)
api_router.include_router(creator.router)
api_router.include_router(blog.router)
api_router.include_router(dashboard.router)
api_router.include_router(social_voice.router)
