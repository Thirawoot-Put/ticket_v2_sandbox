package main

import (
	"ticket-api/order/internal/infrastructure/server"
)

func main() {
	app := server.AppServer()

	port := "9999"

	app.Start(port)
}
