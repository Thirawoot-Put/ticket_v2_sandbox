package main

import (
	"ticket-api/order/internal/config"
	"ticket-api/order/internal/infrastructure/server"
)

func main() {
	config.LoadConfig()

	app := server.AppServer()

	app.Start()
}
