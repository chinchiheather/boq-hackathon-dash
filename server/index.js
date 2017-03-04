var http = require('http');
var express = require('express');
var EventEmitter = require('events').EventEmitter
var DuplexEmitter = require('duplex-emitter')
var extend = require('extend')
var path = require('path')
var uuid = require('hat')
var Server = require('./classes/Server');

var WebSockets = require('ws');
var wsServer = WebSockets.Server;
var wsStream = require('websocket-stream');

var webServer = http.createServer();
var wss = new wsServer({server: webServer});
var Router = require('./classes/Router');
webServer.on('request',Router);


var settings = {
  test: true
}

var server = new Server(settings);

wss.on('connection', function(ws){
  var stream = wsStream(ws);
  console.log("Client Connected.");
  server.connectClient(stream);
});

webServer.listen(8080);

function sendString (stream) {
  stream.write('hello world');
}