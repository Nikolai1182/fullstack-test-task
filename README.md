## Тестовое задание на позицию Fullstack разработчика (Python + React)

**Вводные:**
1. Здесь представлен MVP проект файлообменника. Он позволяет загружать файлы, проверяет их на подозрительный контент и отправляет алерты;
2. Репозиторий содержит в себе бэкенд и фронтенд части;
3. В обоих частях присутствуют баги, неоптимизированный код, неудачные архитектурные решения.

**Задачи:**
1. Проведите рефакторинг бэкенда, не ломая бизнес-логики: предложите свое видение архитектуры и реализуйте его;
2. (Дополнительно) На бэкенде есть возможность неочевидной оптимизации - выполните ее;
3. (Дополнительно) Разбейте логику фронтенда на слои;

**Запуск:**
1. В корне репозитория выполнить:
```bash
docker compose -f docker-compose.dev.yml up --build
```
2. В отдельном терминале применить миграции:
```bash
docker exec -it backend alembic upgrade head
```


**Открыть фронт:** ```http://localhost:3000/test``` 

**Открыть бэк:** ```http://localhost:8000/docs```

### Примечания для локального запуска

- Бэкенд в этом проекте на Python, поэтому в `backend` не используется `npm install`.
- Для сборки фронтенда требуется файл `frontend/.env.production` (может быть пустым).

### Troubleshooting Docker на macOS

- Если видите `Cannot connect to the Docker daemon` — запустите Docker Desktop.
- Если сборка падает с ошибкой snapshot/BuildKit:
```bash
DOCKER_BUILDKIT=0 docker compose -f docker-compose.dev.yml build --no-cache frontend
DOCKER_BUILDKIT=0 docker compose -f docker-compose.dev.yml up
```
