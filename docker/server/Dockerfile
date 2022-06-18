FROM golang:1.17.0-alpine

RUN apk update && apk add git

WORKDIR /go/src/app
COPY . .

RUN go get github.com/cosmtrek/air
# RUN go mod download
# RUN chmod -R 755 /go/src/app
