package database

import (
	"errors"
	"math/rand"

	"github.com/Doer-org/hack-camp_vol4_2022/server/domain"
	"github.com/jinzhu/gorm"
)

type RamenRepository struct{}


func (repo *RamenRepository) GetRandom(db *gorm.DB) (ramen domain.Ramen, err error) {

	ramen = domain.Ramen{}

	// ramensテーブルの行数
	len := (int)(db.Find(&domain.Ramen{}).RowsAffected)

	// テーブルの行数が1個以下の時
	if len < 1 {
		return domain.Ramen{}, errors.New("too few ramens")
	}

	db.Where("id = ?",rand.Intn(len)).Find(&ramen)

	return ramen, nil
}
