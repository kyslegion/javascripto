






let port=4000;
// let express = require('express');
// let app = express();
// let path =require('path');

let{express,app,path,http,io}=require('./require/require');
let{view}=require('./view/view');
let{routes}=require('./route/route');
let{catalogue}=require('./script/catalogue');
let{socket_io}=require('./Socket.io/serveur/serveur');

// let http = require('http').Server(app);
let x =__dirname;
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))

routes(app,express,x,path);
view(app,con);
socket_io(io,catalogue,con);




http.listen(port, '0.0.0.0',()=>{
  console.log(port);
});
