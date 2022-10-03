
var express = require('express');
var app = express();
const path =require('path');

let port=4000;
app.listen(port,()=>{
  console.log(port);
});

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
app.get('/ejs', function(req, res) {
  res.render('index');
  // res.sendFile('index');
});
// app.listen('3000',()=>{
//     console.log("Serveur 3000");
// })
// module.exports=app