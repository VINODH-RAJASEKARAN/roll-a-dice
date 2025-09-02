const express = require('express');
const productCatalogRouter = require('./routes/productroutes');
//const fs = require('fs')

// express app
const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', 'ejsviews');

//Middleware or Interceptor
//This folder you get reference for files
//app.use(express.static('public'));

//get params from request   
app.use(express.urlencoded({ extended : true}));
//parse json bodies in request object
//app.use(express.json());

// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log(`host : ${req.hostname}`);
//     console.log(`path : ${req.path}`);
//     console.log(`method : ${req.method}`);
//     console.log(`url : ${req.url}`);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

//Listen
app.listen(3432, () => {
    console.log('server started and running on port 3432');
});

// app.get('/', (req, res) => {
//     res.send('<p>Betta Fish Product Catalog</p>');
// });

// app.get('/', (req, res) => {
//     fs.readFile('./repo/institution.txt', (err, data) => {
//       if(err) {
//         res.status(404).send("Sorry can't find that!");
//         console.log(err);
//       } else{
//         res.setHeader('Content-Type', 'application/json');
//         res.send(data);
//       }
//     })
// });

//app.use('/curd', curdRouter);

app.use('/curd', productCatalogRouter);

app.get('/index', (req, res) => {
    res.sendFile('./views/index.html', {root : __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root : __dirname});
});

//redirect
app.get('/about-', (req, res) => {
    res.redirect('/about');
});

//404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root : __dirname});
});