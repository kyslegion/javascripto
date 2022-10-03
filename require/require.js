let express = require('express');
let app = express();
let path =require('path');

let http = require('http').Server(app);
let io = require('socket.io')(http);

module.exports={express,app,path,http,io}