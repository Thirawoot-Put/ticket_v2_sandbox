package models

import "gorm.io/gorm"

type Order struct {
	gorm.Model
	Id string

	Amount      int
	TotalAnount int
}
