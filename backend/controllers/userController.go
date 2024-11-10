package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"


    "fmt"
)

var CurrentUser models.User

// Handler pour creer un nouveau user pour SignupScreen
func CreateUser(c *fiber.Ctx) error {
	var user models.User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON(fiber.Map{"message": "Invalid input"})
	}

    fmt.Println(user)
    if result := database.DB.Where("username = ? OR email = ?", user.Username, user.Email).First(&user); result.Error == nil {
		return c.Status(404).JSON(fiber.Map{"message": "Username already exist"})
	}

	if result := database.DB.Create(&user); result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"message": "Could not register user"})
	}

	return c.JSON(fiber.Map{"success": true})
}

// Handler pour récupèrer toutes les lignes de la table users pour DataScreen
func GetUsers(c *fiber.Ctx) error {
	var users []models.User

	// déclaration de la variable utilisée dans la condition à
	// l'intérieur de la déclaration de la condition... Tricky mais propre
	if result := database.DB.Find(&users); result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"message": "Could not retrieve users"})
	}
fmt.Println(users)
	return c.JSON(users)
}

// Handler pour rechercher le user dans la table pour LoginScreen
func FindUser(c *fiber.Ctx) error {
	var input models.User
	if err := c.BodyParser(&input); err != nil {
		return c.Status(400).JSON(fiber.Map{"message": "Invalid input"})
	}
    fmt.Println(input)

	var user models.User
	// Recherche dans la base de données l'utilisateur avec le username et le mail fournis
	if result := database.DB.Where("username = ? AND email = ?", input.Username, input.Email).First(&user); result.Error != nil {
		return c.Status(404).JSON(fiber.Map{"message": "User not found"})
	}
    fmt.Println("passed")
	// Si l'utilisateur est trouvé, on peut renvoyer une réponse indiquant que la connexion est réussie
	return c.JSON(fiber.Map{"success": true, "message": "Login successful"})
}
