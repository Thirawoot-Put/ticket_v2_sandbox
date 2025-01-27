package server

import (
	"fmt"
	"os"

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

	port := os.Getenv("PORT")

	addr := fmt.Sprintf(":%s", port)
	s.HttpListen(addr)
}

func (s *Server) HttpListen(addr string) {
	err := s.app.Run(addr)
	if err != nil {
		panic("Failed to start app server")
	}
}
