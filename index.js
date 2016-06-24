var express = require('express')
var app = express()
// … Configure Express, and register necessary route handlers
var server = app.listen(process.env.PORT)

app.use('/peerjs', require('peer').ExpressPeerServer(server, {
	debug: true
}))
