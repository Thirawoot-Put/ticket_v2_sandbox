package services

import (
	"fmt"
	"ticket-api/order/internal/dto"
)

type orderService interface {
	Create(data *dto.OrderCreateDto)
}

type orderServiceImpl struct {
}

func NewOrderService() orderService {
	return &orderServiceImpl{}
}

func (s *orderServiceImpl) Create(data *dto.OrderCreateDto) {
	fmt.Printf("create order with amount: %d, and total amount: %d", data.Amount, data.TotalAnount)
}
