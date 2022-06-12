package main

import (
	"fmt"
	// "net/http"

	"github.com/Doer-org/hack-camp_vol4_2022/server/infrastructure"
	// "github.com/gin-gonic/gin"
)

func main() {

	db := infrastructure.NewDB()
	fmt.Println(db.Connect())

}
