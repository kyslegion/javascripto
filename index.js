






let port=4000;
let x =__dirname;
// let express = require('express');
// let app = express();
// let path =require('path');

let{express,app,path,http,io}=require('./require/require');
let{view}=require('./view/view');
// let{routes}=require('./route/route');
// let{catalogue}=require('./script/catalogue');
// let{socket_io}=require('./Socket.io/serveur/serveur');
// let http = require('http').Server(app);

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, './views'))
app.use(express.static(__dirname+ '/'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
// routes(app,express,x,path);
// view(app);
// socket_io(io,catalogue,con);
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});



http.listen(port, '0.0.0.0',()=>{
  console.log(port);
});
