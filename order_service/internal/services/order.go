package services

import (
	"fmt"
	"ticket-api/order/internal/dto"
)

type OrderService interface {
	Create(data *dto.OrderCreateDto)
}

type OrderServiceImpl struct {
}

func NewOrderServiceImpl() OrderService {
	return &OrderServiceImpl{}
}

func (s *OrderServiceImpl) Create(data *dto.OrderCreateDto) {
	fmt.Printf("create order with amount: %d, and total amount: %d", data.Amount, data.TotalAnount)
}
