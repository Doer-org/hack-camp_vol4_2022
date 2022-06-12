package usecase

import (
	"github.com/Doer-org/hack-camp_vol4_2022/server/domain"
	"github.com/jinzhu/gorm"
)

type SnackRepository interface {
	FindByID(db *gorm.DB, id int) (snack domain.Snack, err error)
}
