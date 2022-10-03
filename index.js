
let{express,app,http}=require('./require/require');
// var express = require('express');
// var app = express();
const path =require('path');
// let http = require('http').Server(app);
// require('dotenv').config()
// const mysql = require('mysql2')
// const con= mysql.createConnection(process.env.DATABASE_URL);


// let dotenv=require('dotenv').config()
// const mysql = require('mysql2')

let port=4000;
// app.listen(port,()=>{
//   console.log(port);
// });


http.listen(port,()=>{
    console.log(port);
  });
// let{view}=require('./view/view');
// let{routes}=require('./route/route');
// let{catalogue}=require('./script/catalogue');
// let{socket_io}=require('./Socket.io/serveur/serveur');

// routes(app,express,x,path);
// view(app,con);
// socket_io(io,catalogue,con);

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+ '/'));
app.use(express.static(__dirname+ '/style/background/'));
// app.use(express.static(__dirname+ '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
// use res.render to load up an ejs view file
//l

// index page
// app.get('/', function(req, res) {
//   res.render('index.ejs');
// });
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, './connexion.html'));
  // res.render('views/index.ejs');
});
// about page
// app.get('/catalogue', function(req, res) {
//   // res.render('views/catalogue.ejs');
//   res.sendFile(path.join(__dirname, './zobi.html'));
// });
// app.get('/ejs', function(req, res) {
//   res.render('index');
//   // res.sendFile('index');
// });
// app.get('/',(req,res)=>{
//     con.query(`SELECT * FROM livres `, function (err, result, fields) {
//       // let products=JSON.parse(JSON.stringify(result));
//       // console.log(result);
//       res.render('index.ejs', {
//       });
  
//     })
    
    
// });
// app.listen('3000',()=>{
//     console.log("Serveur 3000");
// })
// module.exports=app