'use strict';

/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var path = require('path');
var app = express();

app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

app.get('/', function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname,'index.html'));
});

require('./api.js')(app);

exports = module.exports = app;
