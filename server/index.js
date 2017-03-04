var http = require('http');
var express = require('express');
var EventEmitter = require('events').EventEmitter
var DuplexEmitter = require('duplex-emitter')
var extend = require('extend')
var path = require('path')
var uuid = require('hat')

var WebSockets = require('ws');
var wsServer = WebSockets.Server;
var wsStream = require('websocket-stream');

var server = http.createServer();

wsStream.createServer({
  server: server,
  binary: false
}, sendString);

server.listen(8080);

function sendString (stream) {
  stream.write('hello world');
}