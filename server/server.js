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

module.exports = Server

function Server(opts) {
  // force instantiation via `new` keyword 
  if(!(this instanceof Server)) { return new Server(opts) }
  this.initialize(opts)
}

Server.prototype.initialize = function(opts) {
  var self = this;
  var defaults = {
    name: "dasherver",
    forwardEvents: [
      'init',
      'message',
      'transaction'
    ]
  };
  var settings = self.settings = extend({}, defaults, opts);
  
  // prepare a server object to return
  extend(self, new EventEmitter());
  self.forwardEvents = settings.forwardEvents;
  var clients = self.clients = {};
  setInterval(self.handleErrors(function() {
    self.sendUpdate()
  }), 1000/22); // every 45ms



};

// Setup the client connection - register events, etc
Server.prototype.connectClient = function(duplexStream) {
  var self = this;
  var settings = self.settings;
  // create 'connection' remote event emitter from duplex stream
  var connection = DuplexEmitter(duplexStream);
  // register client id
  var id = uuid();
  connection.id = duplexStream.id = id;
  self.broadcast(id, 'join', id);
  var client = self.clients[id] = {
    id: id,
    connection: connection
  };

  // setup client response handlers
  self.bindClientEvents(client);

  // send client id and initial game settings
  connection.emit('id', id);
  connection.emit('settings', settings);

};

// boot client
Server.prototype.removeClient = function(duplexStream) {
  var self = this;
  var id = duplexStream.id;
  var client = self.clients[id];
  delete self.clients[id];
  self.broadcast(id, 'leave', id);
};


Server.prototype.bindClientEvents = function(client) {
  var self = this;
  var game = self.game;
  var id = client.id;
  var connection = client.connection;
  //var createSky = require('voxel-sky')(game);

  // forward chat message
  connection.on('chat', self.handleErrors(function(message) {
    // ignore if no message provided
    if (!message.text) return
    // limit chat message length
    if (message.text.length > 140) message.text = message.text.substr(0, 140)
    self.broadcast(null, 'chat', message)
  }))

  // when user ready ( game created, etc )
  connection.on('created', self.handleErrors(function() {
    // emit client.created for module consumers
    self.emit('client.created',client)
  }))


  // forward custom events
  self.forwardEvents.map(function(eventName) {
    connection.on(eventName,function() {
      var args = [].slice.apply(arguments)
      // add event name
      args.unshift(eventName)
      // add client id
      args.unshift(id)
      self.broadcast.apply(self,args)
    })
  })

}

// send message to all clients
Server.prototype.broadcast = function(id, event) {
  var self = this
  // normalize arguments
  var args = [].slice.apply(arguments)
  // remove client `id` argument
  args.shift()
  // emit on self for module consumers, unless specified not to
  if (id !== 'server') self.emit.apply(self,args)
  Object.keys(self.clients).map(function(clientId) {
    if (clientId === id) return
    var connection = self.clients[clientId].connection
    // emit over connection
    connection.emit.apply(connection,args)
  })
};