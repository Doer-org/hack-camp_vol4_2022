package controllers

import (
	"github.com/Doer-org/hack-camp_vol4_2022/server/interfaces/database"
	"github.com/Doer-org/hack-camp_vol4_2022/server/usecase"
)

type RamenController struct {
	Interactor usecase.RamenInteractor
}

func NewRamenController(db database.DB) *RamenController {
	return &RamenController{
		Interactor: usecase.RamenInteractor{
			DB:    &database.DBRepository{DB: db},
			Ramen: &database.RamenRepository{},
		},
	}
}


// らーめんを1つ返すAPI
func (controller *RamenController) GetRandom(c Context) {

	ramen, res := controller.Interactor.GetRandom()
	if res.Error != nil {
		c.JSON(res.StatusCode, NewH(res.Error.Error(), nil))
		return
	}

	c.JSON(res.StatusCode, NewH("success", ramen))
}

