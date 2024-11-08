package models

type Message struct {
	ID      int    `gorm:"id"`
	Content string `gorm:"text"`
}
