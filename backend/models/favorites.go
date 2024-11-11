package models

import "gorm.io/gorm"

type Favorites struct {
	gorm.Model
	ID      int `json:"id"`
	UserID  int `json:"user_id" gorm:"uniqueIndex:idx_user_place_fav"`
	PlaceID int `json:"place_id" gorm:"uniqueIndex:idx_user_place_fav"`
}
