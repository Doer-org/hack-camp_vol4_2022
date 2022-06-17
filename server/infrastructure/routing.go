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

	// 指定したidのお菓子を取得するAPI
	r.Gin.GET("/snack/:id", func(c *gin.Context) { snackController.FindByID(c) })

	// ランダムでお菓子を3つ返すAPI
	// price(値段)とcnt(個数)を指定してランダムにお菓子を返す
	r.Gin.GET("/snack/random", func(c *gin.Context) { snackController.GetRandom(c) })

	// id を指定していいねをするAPI
	r.Gin.GET("/snack/like/:id", func(c *gin.Context) { snackController.LikeSnack(c) })

	// お菓子Top10を返すAPI
	r.Gin.GET("/snack/ranking", func(c *gin.Context) { snackController.RankingSnack(c) })

	// お菓子を全部返すAPI
	r.Gin.GET("/snack/all", func(c *gin.Context) { snackController.AllSnack(c) })


}

func (r *Routing) Run() {
	port := fmt.Sprintf(
		":%s",
		r.Port,
	)
	r.Gin.Run(port)
}
