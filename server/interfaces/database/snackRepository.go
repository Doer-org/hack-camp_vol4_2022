package database

import (
	"errors"
	"math/rand"

	"github.com/Doer-org/hack-camp_vol4_2022/server/domain"
	"github.com/jinzhu/gorm"
)

type SnackRepository struct{}

func (repo *SnackRepository) FindByID(db *gorm.DB, id int) (snack domain.Snack, err error) {
	snack = domain.Snack{}
	db.First(&snack, id)
	if snack.Id <= 0 {
		return domain.Snack{}, errors.New("snack is not found")
	}
	return snack, nil
}

// ランダムでお菓子を5つ取得
func (repo *SnackRepository) RandomGetSnack(db *gorm.DB) (snacks []domain.Snack, err error) {
	snacks = []domain.Snack{}
	len := (int)(db.Find(&snacks).RowsAffected)
	randomIds := []int{}
	for i:=0;i<3;i++{
		randomIds = append(randomIds, rand.Intn(len))
	}
	db.Where(randomIds).Find(&snacks)
	return snacks,nil
}
