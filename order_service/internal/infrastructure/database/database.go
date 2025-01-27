package database

import (
	"fmt"
	"log"
	"ticket-api/order/internal/config"
	"ticket-api/order/internal/infrastructure/database/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Connect(config *config.Config) *gorm.DB {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s TimeZone=Asia/Bangkok",
		config.DBHost,
		config.DBUser,
		config.DBPassword,
		config.DBName,
		config.DBPort,
		config.DBSslMode,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Error to connect DB: %v", err)
	}

	migrateDB(db)

	return db
}

func migrateDB(db *gorm.DB) {
	// Run auto migration
	err := db.AutoMigrate(&models.Order{})
	if err != nil {
		log.Fatalf("Failred to auto migrate database: %v", err)
	}
}
