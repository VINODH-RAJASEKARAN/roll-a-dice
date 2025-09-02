const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Helllow shreya');
});

app.get('/example1', (req, res)=>{
    res.send('Helllow shreya => example1');
});

app.get('/example1/:name/:age', (req, res)=>{
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    res.send(`Helllow shreya => example1, name : ${req.params.name},  age : name : ${req.params.age}, book : ${req.query.text}`);
});

app.listen(3000, ()=>{
    console.log(`Server started at port 3000`);
});