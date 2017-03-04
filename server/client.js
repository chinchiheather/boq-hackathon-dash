var server = "ws://localhost:8080";

var Client = require("./classes/Client");
var wsclient = require("ws").Client;
var websocket = require('websocket-stream');
var extend = require('extend')
var duplexStream = websocket(server);

var client = new Client({
  serverStream: duplexStream
});

// use the client.connection [Duplexconnection](https://github.com/pgte/duplex-connection) to react to remote events
client.connection.on('join', function(user) {
  console.log(user,'joined.')
})

console.log( client);