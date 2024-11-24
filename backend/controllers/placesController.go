package controllers

import (
	"backend/database"
	"backend/models"
	"github.com/gofiber/fiber/v2"

"fmt"
)

func GetPlaces_Museum(c *fiber.Ctx) error {
	var places []models.Place
	if err := database.DB.Where("category = ?", "Musée").Find(&places).Error; err != nil {
    		return c.Status(500).JSON(fiber.Map{"error": "Erreur lors de la récupération des données"})
    	}
    fmt.Println(places);
	return c.JSON(places)
}

func GetPlaces_Resto(c *fiber.Ctx) error {
	var places []models.Place
	if err := database.DB.Where("category = ?", "Restaurant").Find(&places).Error; err != nil {
    		return c.Status(500).JSON(fiber.Map{"error": "Erreur lors de la récupération des données"})
    	}
    fmt.Println(places);
	return c.JSON(places)
}

func GetPlaces_Concert(c *fiber.Ctx) error {
	var places []models.Place
	if err := database.DB.Where("category = ?", "Concert").Find(&places).Error; err != nil {
    		return c.Status(500).JSON(fiber.Map{"error": "Erreur lors de la récupération des données"})
    	}
    fmt.Println(places);
	return c.JSON(places)
}

func GetPlaces_Divertissement(c *fiber.Ctx) error {
	var places []models.Place
	if err := database.DB.Where("category = ?", "Divertissement").Find(&places).Error; err != nil {
    		return c.Status(500).JSON(fiber.Map{"error": "Erreur lors de la récupération des données"})
    	}
    fmt.Println(places);
	return c.JSON(places)
}