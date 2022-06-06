FROM golang:1.17.0-alpine

RUN apk update && apk add git

WORKDIR /go/src/app
COPY . /go/src/app

CMD go run main.go
