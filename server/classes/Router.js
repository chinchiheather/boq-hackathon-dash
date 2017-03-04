'use strict';

let fs = require('fs');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

// Let's create the regular HTTP request and response
app.get('/', function(req, res) {

  console.log('Get index');
  fs.createReadStream('./index.html')
  .pipe(res);
});

app.post('/', function(req, res) {

  let message = req.body.message;
  console.log('Regular POST message: ', message);
  return res.json({

    answer: 42
  });
});

module.exports = app;