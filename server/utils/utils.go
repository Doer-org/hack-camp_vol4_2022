package utils

import (
	"math"
)

// priceが 0 < price <= 10000の範囲になるようにする
func FixPrice(price int) int {
	// 最小値確認
	fixPrice := math.Max(1,(float64)(price))

	// 最大値確認
	fixPrice = math.Min(10000,fixPrice)

	return (int)(fixPrice)
}


// cntが 0 < cnt <= 100の範囲になるようにする
func FixCnt(cnt int) int {
	// 最小値確認
	fixCnt := math.Max(1,(float64)(cnt))

	// 最大値確認
	fixCnt = math.Min(100,fixCnt)

	return (int)(fixCnt)
}