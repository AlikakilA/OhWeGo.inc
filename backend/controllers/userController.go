package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"

)

// CreateUser crée un nouvel utilisateur
func CreateUser(c *fiber.Ctx) error {
	var user models.User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON(fiber.Map{"message": "Invalid input"})
	}

	if result := database.DB.Create(&user); result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"message": "Could not register user"})
	}

	return c.JSON(fiber.Map{"success": true})
}

// GetUsers récupère tous les utilisateurs
func GetUsers(c *fiber.Ctx) error {
	var users []models.User
	if result := database.DB.Find(&users); result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"message": "Could not retrieve users"})
	}
	return c.JSON(users)
}
