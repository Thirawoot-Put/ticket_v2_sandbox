package routes

import (
	"ticket-api/order/internal/controllers"
	"ticket-api/order/internal/services"

	"github.com/gin-gonic/gin"
)

func OrderRoutes(routeGroup *gin.RouterGroup) {
	orderService := services.NewOrderServiceImpl()
	orderController := controllers.NewOrderController(orderService)

	orderRoute := routeGroup.Group("/orders")
	{
		orderRoute.POST("/", orderController.Post)
	}
}
