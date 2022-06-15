package controllers

import (
	"strconv"

	"github.com/Doer-org/hack-camp_vol4_2022/server/interfaces/database"
	"github.com/Doer-org/hack-camp_vol4_2022/server/usecase"
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

func (controller *SnackController) Get(c Context) {
	id, _ := strconv.Atoi(c.Param("id"))

	snack, res := controller.Interactor.Get(id)
	if res.Error != nil {
		c.JSON(res.StatusCode, NewH(res.Error.Error(), nil))
		return
	}

	c.JSON(res.StatusCode, NewH("success", snack))
}


func (controller *SnackController) GetRandom(c Context) {
	snacks, res := controller.Interactor.GetRandom()
	if res.Error != nil {
		c.JSON(res.StatusCode, NewH(res.Error.Error(), nil))
		return
	}

	c.JSON(res.StatusCode, NewH("success", snacks))
}
