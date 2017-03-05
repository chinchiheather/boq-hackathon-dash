// basic neural network
var convnetjs = require('./convnetjs/build/convnet');
var extend = require('extend');

exports.ml = Ml;
var net;
var defaultOptions = {
  sx: 1, 
  sy: 1, 
  depth: 2
}
var data = [
  [
    "3223",
    "4/10/2016",
    "FOREIGN FEE AUD   0.54 FRGN AMT: 13.93  U. S. DOLLAR",
    "0",
    "",
    "OTHER",
    ""
  ],[
    "3223",
    "6/07/2016",
    "KARTALIM PTY LTD   QPS SOUTH BRISB AUS",
    "21",
    "",
    "OTHER",
    ""
  ]
];

function Ml(options){
  this.options = extend(defaultOptions, options);
  this.initialize(this.options);
}
Ml.prototype.initialize = function(options){
  console.log(options);
  var layer_defs = [];
  // input layer of size 1x1x2 (all volumes are 3D)
  layer_defs.push({type:'input', out_sx:options.sx, out_sy: options.sy, out_depth: options.depth});
  // some fully connected layers
  layer_defs.push({type:'fc', num_neurons:20, activation:'relu'});
  layer_defs.push({type:'fc', num_neurons:20, activation:'relu'});
  // a softmax classifier predicting probabilities for two classes: 0,1
  layer_defs.push({type:'softmax', num_classes:2});

  // create a net out of it
  var net = this.net = new convnetjs.Net();
  net.makeLayers(layer_defs);

  // the network always works on Vol() elements. These are essentially
  // simple wrappers around lists, but also contain gradients and dimensions
  // line below will create a 1x1x2 volume and fill it with 0.5 and -1.3
  // var x = new convnetjs.Vol([0.5, -1.3]);

  //var probability_volume = net.forward(x);
  //console.log('probability that x is class 0: ' + probability_volume.w[0]);

  var trainer = this.trainer = new convnetjs.Trainer(net, {learning_rate:0.01, l2_decay:0.001});
};
Ml.prototype.periodic = function(){
  console.log('Random Number: ', Math.random());
};
Ml.prototype.getRowAsNum = function(row){
  let rowAsNum = 0;
  for(let field of row){
    let nf = +field;
    if(isNaN(nf)){
      //  nf = field.split('').map((c)=>{return c.charCodeAt(0);});
      nf = 0;
      for(var i=0; i<field.length; i++){
        nf += field.charCodeAt(0);
      }
    }
    rowAsNum+=nf;
  }
  return rowAsNum;
}
Ml.prototype.train = function (row,classIndex) {
  let point = new convnetjs.Vol([this.getRowAsNum(row),+row[0]]);
  this.trainer.train(point,classIndex);
}
Ml.prototype.getClasses = function(row){
  let point = new convnetjs.Vol([this.getRowAsNum(row),+row[0]]);
  console.log(point);
  let probability_result = this.net.forward(point);
  return probability_result.w;
}