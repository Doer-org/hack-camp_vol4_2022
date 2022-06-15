package database

import (
	"errors"
	"math/rand"

	"github.com/Doer-org/hack-camp_vol4_2022/server/domain"
	"github.com/jinzhu/gorm"
)

type SnackRepository struct{}

// 指定したidのお菓子を取得するAPI
func (repo *SnackRepository) FindByID(db *gorm.DB, id int) (snack domain.Snack, err error) {
	snack = domain.Snack{}
	db.First(&snack, id)

	// 指定したidのsnackが見つからなかった時
	if snack.Id <= 0 {
		return domain.Snack{}, errors.New("snack is not found")
	}

	return snack, nil
}

// ランダムでお菓子を3つ返すAPI
func (repo *SnackRepository) GetRandom(db *gorm.DB) (snacks []domain.Snack, err error) {
	snacks = []domain.Snack{}

	// snaksテーブルの行数
	len := (int)(db.Find(&snacks).RowsAffected)

	// テーブルの行数が3個以下の時
	if len < 3 {
		return []domain.Snack{}, errors.New("too few snacks")
	}

	// randomなidを3つ取得し、配列に入れる
	randomIds := []int{}
	for i:=0;i<3;i++{
		randomIds = append(randomIds, rand.Intn(len))
	}

	db.Where(randomIds).Find(&snacks)
	return snacks,nil
}

// id を指定していいねをするAPI
func (repo *SnackRepository) LikeSnack(db *gorm.DB, id int) (snack domain.Snack, err error) {
	snack = domain.Snack{Id:id}
	db.First(&snack)

	// 指定したidのsnackが見つからなかった時
	if snack.Id <= 0 {
		return domain.Snack{}, errors.New("snack is not found")
	}

	snack.Likes += 1
	db.Save(&snack)
	return snack, nil
}
