package models

import "gorm.io/gorm"

type Dislike struct {
	gorm.Model
	ID       int `json:"id"`
	User_id  int `json:"user_id" gorm:"uniqueIndex:idx_user_place_dislike"`
	Place_id int `json:"place_id" gorm:"uniqueIndex:idx_user_place_dislike"`
}
