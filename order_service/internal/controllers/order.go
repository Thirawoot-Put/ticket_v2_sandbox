package controllers

import (
	"net/http"
	"ticket-api/order/internal/dto"
	"ticket-api/order/internal/services"

	"github.com/gin-gonic/gin"
)

type OrderController interface {
	Post(c *gin.Context)
	Get()
}

type OrderConbtrollerImpl struct {
	service services.OrderService
}

func NewOrderController(service services.OrderService) OrderController {
	return &OrderConbtrollerImpl{service: service}
}

func (h *OrderConbtrollerImpl) Post(c *gin.Context) {
	var order dto.OrderCreateDto
	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	h.service.Create(&order)
	c.JSON(http.StatusCreated, gin.H{"success": "Create order success"})
}

func (h *OrderConbtrollerImpl) Get() {}
