# Fullstack Interview App (TypeScript + Tailwind + Django)

## Setup

```
docker-compose build
docker-compose up -d
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py loaddata initial_patients
```
