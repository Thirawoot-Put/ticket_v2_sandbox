package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	PREFIX  string
	VERSION string
	AppEnv  string
	Port    string

	DBHost     string
	DBUser     string
	DBPassword string
	DBName     string
	DBPort     string
	DBSslMode  string
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
		AppEnv:  os.Getenv("APP_ENV"),
		Port:    os.Getenv("PORT"),
		PREFIX:  os.Getenv("PREFIX"),
		VERSION: os.Getenv("VERSION"),

		DBHost:     os.Getenv("DB_HOST"),
		DBUser:     os.Getenv("DB_USER"),
		DBPassword: os.Getenv("DB_PASSWORD"),
		DBName:     os.Getenv("DB_NAME"),
		DBPort:     os.Getenv("DB_PORT"),
		DBSslMode:  os.Getenv("DB_SSLMODE"),
	}
}
