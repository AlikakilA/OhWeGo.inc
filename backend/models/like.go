package models

import "gorm.io/gorm"

type Like struct {
	gorm.Model
	ID       int `json:"id"`
	User_id  int `json:"user_id" gorm:"uniqueIndex:idx_user_place_like"`
	Place_id int `json:"place_id" gorm:"uniqueIndex:idx_user_place_like"`
}
