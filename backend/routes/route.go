package routes

import (
	"backend/controllers"
    "github.com/gofiber/fiber/v2"
)

// Configure les routes de l'application
func Setup(app *fiber.App) {
	app.Post("/api/signup", controllers.CreateUser)
	app.Get("/api/users", controllers.GetUsers)
	app.Post("/api/login", controllers.FindUser)
	app.Get("/api/places_museum", controllers.GetPlaces_Museum)
	app.Get("/api/places_restaurants", controllers.GetPlaces_Resto)
	app.Get("/api/places_divertissement", controllers.GetPlaces_Divertissement)
	app.Get("/api/places_concert", controllers.GetPlaces_Concert)
}
