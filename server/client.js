var server = "wss://localhost:8080";

var Client = require("./classes/Client");
var wsclient = require("ws").Client;
var websocket = require('websocket-stream');
var extend = require('extend')
var duplexStream = websocket(server, { rejectUnauthorized: false });

exports.Client = (function(){
  var client = new Client({
    serverStream: duplexStream
  });

  var joinedUser;
  // use the client.connection [Duplexconnection](https://github.com/pgte/duplex-connection) to react to remote events
  client.connection.on('join', function(user) {
    console.log('Connected to server.', user);
  var client = new Client({
    serverStream: duplexStream
  });

  var joinedUser;
  // use the client.connection [Duplexconnection](https://github.com/pgte/duplex-connection) to react to remote events
  client.connection.on('join', function(user) {
    console.log('Connected to server.', user);
    joinedUser = user;
  });

  client.connection.on('id', function(id){
    console.log("Got ID:", id);
  });
  client.connection.on('settings', function(settings){
    console.log(settings);
  });
  client.connection.on('transaction',function(data){
    console.log(data);
  });
  client.connection.on('csv_finished',function(){
    client.connection.emit('join','clientevent');
  });
  joinedUser = user;
  });

  client.connection.on('id', function(id){
    console.log("Got ID:", id);
  });
  client.connection.on('settings', function(settings){
    console.log(settings);
  });
  client.connection.on('transaction',function(data){
    console.log(data);
  });
  client.connection.on('csv_finished',function(){
    client.connection.emit('join','clientevent');
  });
  return client; 
})()

