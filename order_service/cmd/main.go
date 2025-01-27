package main

import (
	"fmt"
	"log"
	"os"
	"ticket-api/order/internal/infrastructure/server"

	"github.com/joho/godotenv"
)

func main() {
	env := os.Getenv("ENV")
	if env == "" {
		env = "dev"
	}

	envFile := fmt.Sprintf("env/%s.env", env)
	err := godotenv.Load(envFile)
	if err != nil {
		log.Fatalf("Failed to load %s.env file: %v", envFile, err)
	}

	app := server.AppServer()

	app.Start()
}
