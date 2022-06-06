package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	s := gin.Default()

	s.GET("/", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"ping": "pong",
		})
	})

	s.Run(":8000")
}
