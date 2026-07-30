-include .env

.PHONY: tidy run build stop psql logs up down seed clear gen vite install biome

tidy:
	go mod tidy

run:
	docker compose up -d

build:
	docker compose up -d --build

stop:
	docker compose down

psql:
	docker compose exec postgres psql -U $(POSTGRES_USER) -d $(POSTGRES_DB)

logs:
	docker compose logs app --tail=100

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

vite:
	cd web && npm run dev

install:
	cd web && npm install

biome:
	cd web && npm run check
