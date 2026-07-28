# Stage 1: build web
FROM node:24-alpine3.24 AS web

WORKDIR /src/web

COPY web/package*.json ./
RUN npm ci

COPY web/ .
RUN npm run build

# Stage 2: build executable
FROM golang:1.26.4-alpine3.24 AS executable

WORKDIR /src

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o app ./cmd/api

# Stage 3: create container
FROM alpine:3.24 AS app

RUN apk add --no-cache ca-certificates

WORKDIR /app

RUN addgroup -S nonroot && \
    adduser -S nonroot -G nonroot

COPY --from=executable --chown=nonroot:nonroot /src/app .
COPY --from=web --chown=nonroot:nonroot /src/web/dist ./web/dist

USER nonroot

EXPOSE 8080

ENTRYPOINT ["./app"]