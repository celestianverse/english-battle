-include .env

.PHONY: tidy run run-build stop psql up down seed clear gen

tidy:
	go mod tidy

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

seed:
	go run ./cmd/seed/main.go

clear:
	go run ./cmd/clear/main.go

gen:
	sqlc generate
