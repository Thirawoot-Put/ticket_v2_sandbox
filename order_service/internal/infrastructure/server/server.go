package server

import (
	"fmt"
	"ticket-api/order/internal/config"
	"ticket-api/order/internal/infrastructure/database"
	"ticket-api/order/internal/infrastructure/server/routes"

	"github.com/gin-gonic/gin"
)

type Server struct {
	app *gin.Engine
}

func AppServer() *Server {
	ginApp := gin.Default()

	return &Server{
		app: ginApp,
	}
}

func (s *Server) Start() {
	// connect database
	config := config.LoadConfig()

	database.Connect(config)

	addr := fmt.Sprintf(":%s", config.Port)

	url := fmt.Sprintf("/%s/%s", config.PREFIX, config.VERSION)
	router := s.app.Group(url)
	routes.OrderRoutes(router)

	s.HttpListen(addr)
}

func (s *Server) HttpListen(addr string) {
	err := s.app.Run(addr)
	if err != nil {
		panic("Failed to start app server")
	}
}

func AddRoute(routeGroup *gin.RouterGroup) {
	routes.OrderRoutes(routeGroup)
}
