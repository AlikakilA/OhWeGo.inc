package models

import "gorm.io/gorm"

type Place struct {
	gorm.Model
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Category    string `json:"category"`
	Address     string `json:"address"`
	Longitude   string `json:"longitude"`
	Latitude    string `json:"latitude"`
	Rating      int    `json:"rating"`
	Photo_url   string `json:"photo_url"`
	Description string `json:"description"`
}

type Place_category struct {
	Place_id      int    `json:"place_id"`
	Category_name string `json:"category_name"`
}
