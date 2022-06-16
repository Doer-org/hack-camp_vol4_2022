package usecase

import "github.com/Doer-org/hack-camp_vol4_2022/server/domain"

type SnackInteractor struct {
	DB    DBRepository
	Snack SnackRepository
}

// 指定したidのお菓子を取得するAPI
func (interactor *SnackInteractor) FindByID(id int) (snack domain.SnackForGet, resultStatus *ResultStatus) {
	db := interactor.DB.Connect()
	foundSnack, err := interactor.Snack.FindByID(db, id)
	if err != nil {
		return domain.SnackForGet{}, NewResultStatus(404, err)
	}
	snack = foundSnack.BuildForGet()
	return snack, NewResultStatus(200, nil)
}

// ランダムでお菓子を返すAPI
func (interactor *SnackInteractor) GetRandom(price int, cnt int) (snacks []domain.SnackForGet, resultStatus *ResultStatus) {
	db := interactor.DB.Connect()
	foundSnacks, err := interactor.Snack.GetRandom(db, price, cnt)
	if err != nil {
		return []domain.SnackForGet{}, NewResultStatus(404, err)
	}
	for _, foundSnack := range foundSnacks {
		snacks =  append(snacks, foundSnack.BuildForGet())
	}
	return snacks, NewResultStatus(200, nil)
}

// id を指定していいねをするAPI
func (interactor *SnackInteractor) LikeSnack(id int) (snack domain.SnackForGet, resultStatus *ResultStatus) {
	db := interactor.DB.Connect()
	foundSnack, err := interactor.Snack.LikeSnack(db, id)
	if err!=nil {
		return  domain.SnackForGet{},NewResultStatus(404,err)
	}
	snack = foundSnack.BuildForGet()
	return snack, NewResultStatus(200,nil)
}
