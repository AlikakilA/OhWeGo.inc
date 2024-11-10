package models

type Friend struct {
	ID        int    `json:"id"`
	User_id   int    `json:"user_id" gorm:"uniqueIndex:idx_user_friend"`
	Friend_id int    `json:"friend_id" gorm:"uniqueIndex:idx_user_friend"`
	Status    string `json:"status"` // pending, accepted, refused
}
