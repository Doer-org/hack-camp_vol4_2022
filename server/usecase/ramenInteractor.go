package usecase

import "github.com/Doer-org/hack-camp_vol4_2022/server/domain"

type RamenInteractor struct {
	DB    DBRepository
	Ramen RamenRepository
}


// ランダムでお菓子を返すAPI
func (interactor *RamenInteractor) GetRandom() (ramen domain.RamenForGet, resultStatus *ResultStatus) {
	db := interactor.DB.Connect()
	foundRamen, err := interactor.Ramen.GetRandom(db)
	if err != nil {
		return domain.RamenForGet{}, NewResultStatus(404, err)
	}
	ramen = foundRamen.BuildRamenForGet()
	return ramen, NewResultStatus(200, nil)
}
