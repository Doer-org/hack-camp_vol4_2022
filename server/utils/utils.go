package utils

import (
	"math"
)

// priceが 0 < price <= 10000の範囲になるようにする
func FixPrice(price int) int {
	// 最小値確認
	fixPrice := math.Max(1, (float64)(price))

	// 最大値確認
	fixPrice = math.Min(10000, fixPrice)

	return (int)(fixPrice)
}

// emotionの値が 0<=emotion<=3以外の場合0に変更
func FixEmotion(emotion int) int {
	if emotion < 0 || emotion > 3 {
		return 0
	}
	return emotion
}
