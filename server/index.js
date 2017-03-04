var http = require('https');
var WebSocketServer = require('ws').Server;
var WebSocketStream = require('websocket-stream');
let fs = require('fs');
var fastcsv = require('fast-csv');

var Server = require('./classes/Server');
var Router = require('./classes/Router');

const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

var webServer = http.createServer(options);
var wss = new WebSocketServer({server: webServer});
webServer.on('request',Router);


var settings = {
  test: true
}

var server = new Server(settings);

wss.on('connection', function(ws){
  var stream = WebSocketStream(ws);
  console.log("Client Connected.");
  server.connectClient(stream);
});

webServer.listen(8080);

server.on('client.created', function(client){
  console.log('Client Created');
  client.connection.on('join', function(data){
    console.log(arguments);
  });

  let stream = fs.createReadStream('./Data.csv');

  var csvStream = fastcsv()
    .on('data',function(data){
      client.connection.emit('transaction', data);
    })
    .on('end',function(){
      client.connection.emit('csv_finished');
      console.log('done');
    });
  stream.pipe(csvStream);
})
