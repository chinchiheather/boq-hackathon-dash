var http = require('https');
var WebSocketServer = require('ws').Server;
var WebSocketStream = require('websocket-stream');
let fs = require('fs');
var fastcsv = require('fast-csv');
var extend = require('extend');
var Server = require('./classes/Server');
var Router = require('./classes/Router');
var Ml = require('./ml').ml;
var ml = new Ml();

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
var transClasses = [
  "Work-related",
  "Not work related"
];

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
  client.connection.on('train',function(feedback){
    classNum = feedback.class;
    data = feedback.data;
    ml.train(data,classNum);
  })

  let stream = fs.createReadStream('./Data.csv');

  var csvStream = fastcsv({ headers: true })
    .on('data',function(data){
      let likelyClass = '';
      console.log(data);
      let lcnum = 1;
      let classProbs = ml.getClasses(data);
      console.log(classProbs);
      if(classProbs[0] > classProbs[1]){
        likelyClass = transClasses[0];
        lcnum=0;
      } else {
        likelyClass = transClasses[1];
        lcnum = 1;
      }
      data = { data: data, class:likelyClass, classNum: lcnum, probs:classProbs };
      client.connection.emit('transaction', data);
    })
    .on('end',function(){
      client.connection.emit('csv_finished');
      console.log('done');
    });
  stream.pipe(csvStream);
})
