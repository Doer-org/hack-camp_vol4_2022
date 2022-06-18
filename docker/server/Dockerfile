FROM golang:1.17.0-alpine

RUN apk update && apk add git

WORKDIR /go/src/github.com/Doer-org/hack-camp_vol4_2022/server
COPY . .

RUN go get github.com/cosmtrek/air
# RUN go mod download
# RUN chmod -R 755 /go/src/app
