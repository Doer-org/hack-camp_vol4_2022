package infrastructure

import (
	"fmt"
	"os"
	"time"

	"github.com/Doer-org/hack-camp_vol4_2022/server/interfaces/controllers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Routing struct {
	DB   *DB
	Gin  *gin.Engine
	Port string
}

func newGin() *gin.Engine {
	server := gin.Default()
	server.Use(cors.New(cors.Config{
		AllowOrigins: []string{
			"http://localhost:3000",
			"https://okashi-omikuzi.vercel.app",
		},
		AllowMethods: []string{
			"POST",
			"GET",
			"OPTIONS",
			"PUT",
			"DELETE",
		},
		// 許可したいHTTPリクエストヘッダの一覧
		AllowHeaders: []string{
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"X-CSRF-Token",
			"Authorization",
		},
		// preflightリクエストの結果をキャッシュする時間
		MaxAge: 24 * time.Hour,
	}))
	return server
}

func NewRouting(db *DB) *Routing {
	c := NewConfig()
	r := &Routing{
		DB:   db,
		Gin:  newGin(),
		Port: c.Routing.Port,
	}
	r.setRouting()
	return r
}

func (r *Routing) setRouting() {
	snackController := controllers.NewSnackController(r.DB)
	ramenController := controllers.NewRamenController(r.DB)

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

	// らーめんを1つ返すAPI
	r.Gin.GET("/ramen/random", func(c *gin.Context) { ramenController.GetRandom(c) })

}

func (r *Routing) Run() {
	port := fmt.Sprintf(
		":%s",
		os.Getenv("PORT"),
	)
	r.Gin.Run(port)
}
