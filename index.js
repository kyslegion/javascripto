






let port=4000;
let x =__dirname;

let{express,app,path,http,io}=require('./require/require');

app.use(express.static(__dirname+ '/'));
app.use(express.static(path.join(__dirname, '/')));
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
});



http.listen(port, '0.0.0.0',()=>{
  console.log(port);
});
