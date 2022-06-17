package main

import (
	"github.com/Doer-org/hack-camp_vol4_2022/server/infrastructure"
)

func main() {
	db := infrastructure.NewDB()
	r := infrastructure.NewRouting(db)
	r.Run()
}
