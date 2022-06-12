package database

import (
	"errors"

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
