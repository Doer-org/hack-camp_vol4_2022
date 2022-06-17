package controllers

import (
	"strconv"

	"github.com/Doer-org/hack-camp_vol4_2022/server/interfaces/database"
	"github.com/Doer-org/hack-camp_vol4_2022/server/usecase"
	"github.com/Doer-org/hack-camp_vol4_2022/server/utils"
)

type SnackController struct {
	Interactor usecase.SnackInteractor
}

func NewSnackController(db database.DB) *SnackController {
	return &SnackController{
		Interactor: usecase.SnackInteractor{
			DB:    &database.DBRepository{DB: db},
			Snack: &database.SnackRepository{},
		},
	}
}

// 指定したidのお菓子を取得するAPI
func (controller *SnackController) FindByID(c Context) {
	id, _ := strconv.Atoi(c.Param("id"))

	snack, res := controller.Interactor.FindByID(id)
	if res.Error != nil {
		c.JSON(res.StatusCode, NewH(res.Error.Error(), nil))
		return
	}

	c.JSON(res.StatusCode, NewH("success", snack))
}

// ランダムでお菓子を返すAPI
func (controller *SnackController) GetRandom(c Context) {
	// defaultでprice1000とcnt=3
	price, _ := strconv.Atoi(c.DefaultQuery("price", "1000"))
	emotion, _ := strconv.Atoi(c.DefaultQuery("emotion", "0"))

	// priceの値を 0に変更 < price <= 10000になるように修正
	// emotionの値が 0 <= emotion <=3 以外の場合0に変更
	// 命名がいまいち, なおしたい
	fixPrice := utils.FixPrice(price)
	fixEmotion := utils.FixEmotion(emotion)

	snacks, res := controller.Interactor.GetRandom(fixPrice, fixEmotion)
	if res.Error != nil {
		c.JSON(res.StatusCode, NewH(res.Error.Error(), nil))
		return
	}

	c.JSON(res.StatusCode, NewH("success", snacks))
}

// id を指定していいねをするAPI
func (controller *SnackController) LikeSnack(c Context) {
	id, _ := strconv.Atoi(c.Param("id"))

	snack, res := controller.Interactor.LikeSnack(id)
	if res.Error != nil {
		c.JSON(res.StatusCode, NewH(res.Error.Error(), nil))
		return
	}

	c.JSON(res.StatusCode, NewH("success", snack))
}
