
let{express,app,http}=require('./require/require');
let port=4000;
const path =require('path');
http.listen(port,()=>{
});
app.use(express.static(__dirname+ '/'));
app.use(express.static(__dirname+ '/style/background/'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.get('/', function(req, res) {
    res.render('index.ejs');
});

