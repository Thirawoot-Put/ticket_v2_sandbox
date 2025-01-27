package services

import (
	"fmt"
	"ticket-api/order/internal/dto"
)

type OrderService struct {
}

func NewOrderService() *OrderService {
	return &OrderService{}
}

func (s *OrderService) CreateOrder(data *dto.OrderCreateDto) {
	fmt.Println("create order with amount: %d, and total amount: %d", data.Amount, data.TotalAnount)
}
