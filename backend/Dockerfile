FROM python:3.13-alpine

# Avoids .pyc clutter in the repo.
ENV PYTHONDONTWRITEBYTECODE=1

# Forces Python to output text directly to the terminal (stdout and stderr) without buffering.
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . /app/

# Enable git to be installed locally, within the container, so VS Code can see git.
RUN apk update && \
	apk add --no-cache git