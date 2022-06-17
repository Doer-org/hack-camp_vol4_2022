package usecase

import (
	"github.com/Doer-org/hack-camp_vol4_2022/server/domain"
	"github.com/jinzhu/gorm"
)

// 具体的な実装は
// interfaces/database/snackRepository.go
// にあります
type SnackRepository interface {
	FindByID(db *gorm.DB, id int) (snack domain.Snack, err error)
	GetRandom(db *gorm.DB, price int, emotion int) (snacks []domain.Snack, err error)
	LikeSnack(db *gorm.DB, id int) (snack domain.Snack, err error)
}
