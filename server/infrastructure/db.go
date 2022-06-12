package infrastructure

import (
	"fmt"
	"time"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
)

type DB struct {
	Host     string
	Port     string
	Username string
	Password string
	DBName   string
	Conn     *gorm.DB
}

func NewDB() *DB {
	c := NewConfig()
	return newDB(&DB{
		Host:     c.DB.Host,
		Port:     c.DB.Port,
		Username: c.DB.Username,
		Password: c.DB.Password,
		DBName:   c.DB.DBName,
	})
}

func newDB(d *DB) *DB {
	// DB接続情報
	connInfo := fmt.Sprintf(
		"user=%s password=%s host=%s port=%s dbname=%s sslmode=disable",
		d.Username,
		d.Password,
		d.Host,
		d.Port,
		d.DBName,
	)

	db, err := gorm.Open("postgres", connInfo)

	//30回接続を試みる
	for i := 0; i < 30 && err != nil; i++ {
		fmt.Println(err)
		fmt.Printf("db connect failed...\n\n")
		time.Sleep(time.Second * 2)
		db, err = gorm.Open("postgres", connInfo)
	}

	// うまく接続できなかった場合
	if err != nil {
		panic("db connect failed...\n\nexit\n")
	}

	d.Conn = db
	return d

}

func (db *DB) Begin() *gorm.DB {
	return db.Conn.Begin()
}

func (db *DB) Connect() *gorm.DB {
	return db.Conn
}
