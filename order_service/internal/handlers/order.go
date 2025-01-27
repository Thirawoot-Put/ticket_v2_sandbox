package handlers

import (
	"net/http"
	"ticket-api/order/internal/dto"
	"ticket-api/order/internal/services"

	"github.com/gin-gonic/gin"
)

type OrderHandler struct {
	service *services.OrderService
}

func NewOrderHandler(service *services.OrderService) *OrderHandler {
	return &OrderHandler{service: service}
}

func (h *OrderHandler) Post(c *gin.Context) {
	var order dto.OrderCreateDto
	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	h.service.CreateOrder(&order)
	c.JSON(http.StatusBadRequest, gin.H{"success": "Create order success"})
}
