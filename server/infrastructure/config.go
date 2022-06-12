package infrastructure

import "os"

type Config struct {
	DB struct {
		Host     string
		Port     string
		Username string
		Password string
		DBName   string
	}
	Routing struct {
		Port string
	}
}

func NewConfig() *Config {
	c := new(Config)

	// DBの設定
	c.DB.Host = "psql-db"
	c.DB.Port = "5432"
	c.DB.Username = os.Getenv("POSTGRES_USER")
	c.DB.Password = os.Getenv("POSTGRES_PASSWORD")
	c.DB.DBName = os.Getenv("POSTGRES_DB")

	// apiのport設定
	c.Routing.Port = ":8000"

	return c

}
