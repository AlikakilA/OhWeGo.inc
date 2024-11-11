package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID            int    `json:"user_id"`
	Username      string `json:"username"`
	Email         string `json:"email"`
	Password_hash string `json:"password_hash"`
}
