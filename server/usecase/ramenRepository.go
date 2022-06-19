package usecase

import (
	"github.com/Doer-org/hack-camp_vol4_2022/server/domain"
	"github.com/jinzhu/gorm"
)

// 具体的な実装は
// interfaces/database/ramenRepository.go
// にあります
type RamenRepository interface {
	GetRandom(db *gorm.DB) (ramen domain.Ramen, err error)
}
