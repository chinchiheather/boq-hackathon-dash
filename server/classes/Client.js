var EventEmitter = require('events').EventEmitter
var DuplexEmitter = require('duplex-emitter')
var extend = require('extend')


module.exports = Client

function Client(opts) {
  // force instantiation via `new` keyword 
  if (!(this instanceof Client)) { return new Client(opts) }
  this.initialize(opts)
}

Client.prototype.initialize = function(opts) {
  var self = this
    // allow module consumers to listen to ee2 events
    // set initial values
  self.opts = opts
  self.clientID;
  self.remoteClients = {}
  self.serverStream = opts.serverStream
    // expose emitter methods on client
  extend(self, new EventEmitter())

  // create 'connection' remote event emitter from duplex stream
  self.connection = DuplexEmitter(opts.serverStream)
    // setup server event handlers
  self.bindEvents(self.connection)
}

Client.prototype.bindEvents = function(connection) {
  var self = this

  // receive id from server 
  connection.on('id', function(id) {
    self.clientID = id;
  })

  // receive initial settings
  connection.on('settings', function(settings) {
    // set client-specific settings
    settings.isClient = true

    // tell server we're ready
    connection.emit('created')
  });
}
