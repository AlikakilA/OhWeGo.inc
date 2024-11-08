package database

import (
	"backend/models"
	"fmt"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"os"
)

var DB *gorm.DB

func InitDB() {
	// Charger les variables d'environnement
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatalf("Erreur lors du chargement de .env : %v", err)
	}

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		os.Getenv("POSTGRES_HOST"),
		os.Getenv("POSTGRES_USER"),
		os.Getenv("POSTGRES_PASSWORD"),
		os.Getenv("POSTGRES_DB"),
		os.Getenv("POSTGRES_PORT"),
	)

	// Connexion à la base de données
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Erreur de connexion à la base de données : %v\n", err)
	}

	DB.AutoMigrate(&models.User{}, &models.Message{})
}
