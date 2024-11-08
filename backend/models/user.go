package models

type User struct {
	ID       uint   `gorm:"primaryKey"`
	Username string `gorm:"username"`
	Mail     string `gorm:"mail"`
}
