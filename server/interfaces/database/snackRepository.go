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

// ランダムでお菓子を返すAPI

// emotion
// 0 : normal
// 1 : sad
// 2 : angry
// 3 : happy

// flavor
// 1 : sweet
// 2 : spicy
// 3 : salty

func (repo *SnackRepository) GetRandom(db *gorm.DB, price int, emotion int) (snacks []domain.Snack, err error) {

	snacks = []domain.Snack{}

	// snaksテーブルの行数
	len := (int)(db.Find(&[]domain.Snack{}).RowsAffected)

	// テーブルの行数が3個以下の時
	if len < 3 {
		return []domain.Snack{}, errors.New("too few snacks")
	}

	// 現在の条件で取得できるすべてのSnacks
	allSnacks := []domain.Snack{}

	if emotion == 1 {
		// 悲しいときは甘いもの!
		len = (int)(db.Where("flavor = ?", 1).Find(&allSnacks).RowsAffected)
		// db.Where("flavor = ?", 1).Find(&allSnacks)

	} else if emotion == 2 {
		// いらいらしたら辛いもの！
		len = (int)(db.Where("flavor = ?", 2).Find(&allSnacks).RowsAffected)
		// db.Where("flavor = ?", 2).Find(&allSnacks)

	} else if emotion == 3 {
		// 幸せなときはしょっぱいもの(??????)
		len = (int)(db.Where("flavor = ?", 3).Find(&allSnacks).RowsAffected)
		// db.Where("flavor = ?", 3).Find(&allSnacks)

	} else {
		// 無感情
		db.Find(&allSnacks)
	}

	sumPrice := 0

	for i := 0; i < len; i++ {
		tmpSnacks := allSnacks[rand.Intn(len)-1]

		// 予算超えた場合
		if sumPrice+tmpSnacks.Price > price {
			break
		}
		snacks = append(snacks, tmpSnacks)
		sumPrice += tmpSnacks.Price
	}

	return snacks, nil
}

// id を指定していいねをするAPI
func (repo *SnackRepository) LikeSnack(db *gorm.DB, id int) (snack domain.Snack, err error) {
	snack = domain.Snack{Id: id}
	db.First(&snack)

	// 指定したidのsnackが見つからなかった時
	if snack.Id <= 0 {
		return domain.Snack{}, errors.New("snack is not found")
	}

	snack.Likes += 1
	db.Save(&snack)
	return snack, nil
}
