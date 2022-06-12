package usecase

import "github.com/Doer-org/hack-camp_vol4_2022/server/domain"

type SnackInteractor struct {
	DB    DBRepository
	Snack SnackRepository
}

func (interactor *SnackInteractor) Get(id int) (snack domain.SnackForGet, resultStatus *ResultStatus){
	db := interactor.DB.Connect()
	foundSnack , err := interactor.Snack.FindByID(db, id)
	if err != nil{
		return domain.SnackForGet{},NewResultStatus(404,err)
	}
	snack = foundSnack.BuildForGet()
	return snack,NewResultStatus(200,nil)
}
