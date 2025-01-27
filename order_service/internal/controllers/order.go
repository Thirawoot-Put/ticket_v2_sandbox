package controllers

import (
	"net/http"
	"ticket-api/order/internal/dto"
	"ticket-api/order/internal/services"

	"github.com/gin-gonic/gin"
)

type OrderConbtroller struct {
	service *services.OrderService
}

func NewOrderController(service *services.OrderService) *OrderConbtroller {
	return &OrderConbtroller{service: service}
}

func (h *OrderConbtroller) Post(c *gin.Context) {
	var order dto.OrderCreateDto
	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
		return
	}

	h.service.Create(&order)
	c.JSON(http.StatusBadRequest, gin.H{"success": "Create order success"})
}
