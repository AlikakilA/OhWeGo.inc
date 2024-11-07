package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// struct pour le Message de la BDD
type Message struct {
	ID      uint   `gorm:"primaryKey"`
	Content string `gorm:"type:text"`
}

// Pointeur sur la connexion à notre BDD grace à GORM
var db *gorm.DB

// Initialisation de la connexion à la BDD (BDD à lancer à coté)
func initDB() {
	// Charger les variables d'environnements
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

	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Erreur de connexion à la base de données : %v\n", err)
	}

	// Migrer le schéma de la base de données (crée la table si elle n'existe pas)
	db.AutoMigrate(&Message{})
}

func main() {
	initDB()

    
	app := fiber.New()

	app.Get("/api/message", func(c *fiber.Ctx) error {
		var message Message
		if err := db.First(&message).Error; err != nil {
			return c.Status(http.StatusInternalServerError).SendString("Erreur réception")
		}
		return c.JSON(fiber.Map{"message": message.Content})
	})

	log.Fatal(app.Listen(":3001"))
}
