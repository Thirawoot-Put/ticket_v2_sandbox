package server

import (
	"fmt"
	"ticket-api/order/internal/config"

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

	addr := fmt.Sprintf(":%s", config.Port)
	s.HttpListen(addr)
}

func (s *Server) HttpListen(addr string) {
	err := s.app.Run(addr)
	if err != nil {
		panic("Failed to start app server")
	}
}
