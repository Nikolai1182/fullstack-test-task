import os


def _required_env(name: str) -> str:
    value = os.environ.get(name)
    if not value:
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value


POSTGRES_USER = _required_env("POSTGRES_USER")
POSTGRES_PASSWORD = _required_env("POSTGRES_PASSWORD")
POSTGRES_HOST = _required_env("POSTGRES_HOST")
POSTGRES_DB = _required_env("POSTGRES_DB")
POSTGRES_PORT = _required_env("PGPORT")

DB_URL = (
    f"postgresql+asyncpg://{POSTGRES_USER}:{POSTGRES_PASSWORD}"
    f"@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}"
)

REDIS_URL = os.environ.get("REDIS_URL", "redis://backend-redis:6379/0")
