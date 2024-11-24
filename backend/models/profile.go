package models

import "gorm.io/gorm"

type Profile struct {
	gorm.Model
	ID        int    `json:"id"`
	Username  string `json:"username"`
	User_id   int    `json:"user_id"`
	Like      int    `json:"like"`
	Dislike   int    `json:"dislike"`
	Photo_url string `json:"photo_url"`
}
