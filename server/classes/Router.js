'use strict';

let fs = require('fs');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let browserify = require('browserify');

app.use(bodyParser.json());

// Let's create the regular HTTP request and response
app.get('/', function(req, res) {

  console.log('Get index');
  let istrm = fs.createReadStream('./index.html')
  istrm.pipe(res);
});
app.get('/bundle.js',function(req,res){
  let bundle = browserify('./client.js').bundle();
  bundle.pipe(res);
});
app.post('/', function(req, res) {

  let message = req.body.message;
  console.log('Regular POST message: ', message);
  return res.json({

    answer: 42
  });
});

module.exports = app;