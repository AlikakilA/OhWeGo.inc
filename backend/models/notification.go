package models

import "gorm.io/gorm"

type Notification struct {
	gorm.Model
	ID            int    `json:"id"`
	Category      string `json:"category"`      //like/dislike or friend request
	User_id       int    `json:"user_id"`       //receiver
	Sourceuser_id int    `json:"sourceuser_id"` //sender
	Created_at    string `json:"created_at"`
	Content       string `json:"content"`
	Is_read       bool   `json:"is_read"`
}
