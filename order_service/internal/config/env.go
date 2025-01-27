package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	AppEnv string
	Port   string
}

func LoadConfig() *Config {
	env := os.Getenv("APP_ENV")
	if env == "" {
		env = "dev"
	}
	envFile := "env/" + env + ".env"

	if err := godotenv.Load(envFile); err != nil {
		log.Fatalf("Error loading %s file: %v", envFile, err)
	}

	return &Config{
		AppEnv: os.Getenv("APP_ENV"),
		Port:   os.Getenv("PORT"),
	}
}
