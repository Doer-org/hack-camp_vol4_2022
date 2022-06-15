package infrastructure

import (
	"fmt"

	"github.com/Doer-org/hack-camp_vol4_2022/server/interfaces/controllers"
	"github.com/gin-gonic/gin"
)

type Routing struct {
	DB   *DB
	Gin  *gin.Engine
	Port string
}

func NewRouting(db *DB) *Routing {
	c := NewConfig()
	r := &Routing{
		DB:   db,
		Gin:  gin.Default(),
		Port: c.Routing.Port,
	}
	r.setRouting()
	return r
}

func (r *Routing) setRouting() {
	snackController := controllers.NewSnackController(r.DB)

	// find by id API
	r.Gin.GET("/snack/:id", func(c *gin.Context) { snackController.Get(c) })

	// get random API (3)
	r.Gin.GET("/snack/random", func(c *gin.Context) { snackController.GetRandom(c) })

}

func (r *Routing) Run() {
	port := fmt.Sprintf(
		":%s",
		r.Port,
	)
	r.Gin.Run(port)
}
