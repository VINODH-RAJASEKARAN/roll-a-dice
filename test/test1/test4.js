const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const qrCode = require('qrcode');
const port = 7591;

// view engine
app.set('view engine', 'ejs');
//app.set('static', 'ejsviews');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res)=>{
    //res.sendFile(path.join(__dirname, 'static', 'index.html'));
    res.sendFile(path.join(__dirname, 'static', 'page1.html'));
});

app.post('/', (req, res)=>{
    if((req.body.user_email).trim() == 'lakshmi.ravindran@aspiresys.com' && (req.body.user_pass).trim() == 'Aspire@1234')
        res.sendFile(path.join(__dirname, 'static', 'page1.html'));
    else 
        res.sendFile(path.join(__dirname, 'static', 'page2.html'));
});

app.get('/qrcode', (req, res)=>{
    res.render('testengine', {generatedQrCode : "hello"});
});

app.post('/qrcode', (req, res)=>{

    if(req.body.user_qrcode != null && req.body.user_qrcode != undefined){
        qrCode.toDataURL((req.body.user_qrcode).trim(), function (err, url) {
            console.log(url);
            res.render('testengine', {generatedQrCode : url});
        });
    } else {
        res.sendFile(path.join(__dirname, 'static', 'page2.html'));
    }
    
});

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
});