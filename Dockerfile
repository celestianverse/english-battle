# Stage 1: create binary
FROM golang:1.26.4-alpine3.24 AS builder

WORKDIR /src

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN GOOS=linux GOARCH=amd64 go build -o app ./cmd/api

# Stage 2: create container
FROM alpine:3.24 AS app

RUN apk add --no-cache ca-certificates

WORKDIR /app

RUN addgroup -S nonroot && \
    adduser -S nonroot -G nonroot

COPY --from=builder --chown=nonroot:nonroot /src/app .

USER nonroot

EXPOSE 8080

ENTRYPOINT ["./app"]
