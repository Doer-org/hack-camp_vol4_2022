package controllers

type Context interface {
	Param(key string) string
	DefaultQuery(key, defaultValue string) string
	JSON(code int, obj interface{})
}
