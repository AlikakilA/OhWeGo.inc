FROM golang:1.20 AS builder
WORKDIR /app

COPY . .
RUN go mod download
RUN go build -o app

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/app .
EXPOSE 8080
CMD ["./app"]
