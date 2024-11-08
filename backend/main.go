package main

import (
	"backend/database"
	"backend/routes"
	"log"
    "github.com/gofiber/fiber/v2"

)

func main() {
	database.InitDB()

	app := fiber.New()

	routes.Setup(app)

	log.Fatal(app.Listen(":3001"))
}
