
const express = require('express');
//const curdRouter = require('./routes/curdroutes');
const fs = require('fs')
//const SqlLiteHelper = require('./SqlLiteHelper');
//const sqliteObject = new SqlLiteHelper();

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
//     sqlObject.dbinstance.getDataByRow();
//     next();
// });

//Listen
app.listen(3000, () => {
    console.log('server started and running on port 3000');
});

app.get('/', (req, res) => {
    res.send('<p>Hello World 123</p>');
});

app.get('/', (req, res) => {
    fs.readFile('./repo/institution.txt', (err, data) => {
      if(err) {
        res.status(404).send("Sorry can't find that!");
        console.log(err);
      } else{
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
      }
    })
});

//app.use('/curd', curdRouter);

app.get('/otp', (req, res) => {
    res.sendFile('./views/opt.html', {root : __dirname});
});

app.get('/index', (req, res) => {
    res.sendFile('./views/index.html', {root : __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root : __dirname});
});

//redirect
app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

//404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root : __dirname});
});