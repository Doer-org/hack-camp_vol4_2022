package usecase

import "github.com/jinzhu/gorm"

// 具体的な実装は
// interfaces/database/dbRepository.go
// にあります
type DBRepository interface {
	Begin() *gorm.DB
	Connect() *gorm.DB
}
