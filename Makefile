-include .env

.PHONY: run run-build stop psql up down

run:
	docker compose up -d

run-build:
	docker compose up -d --build

stop:
	docker compose down

psql:
	docker compose exec postgres psql -U $(POSTGRES_USER) -d $(POSTGRES_DB)

up:
	goose up

down:
	goose down

