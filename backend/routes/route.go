package routes

import (
	"backend/controllers"
    "github.com/gofiber/fiber/v2"
)

// Configure les routes de l'application
func Setup(app *fiber.App) {
	app.Post("/api/signup", controllers.CreateUser)
	app.Get("/api/users", controllers.GetUsers)
}
