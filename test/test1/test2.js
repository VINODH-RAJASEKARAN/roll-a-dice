const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./example2.txt');
    res.writeHead(200, {'Content-type' : 'text/html'});
    readStream.pipe(res);
}).listen('3000');

// const server = http.createServer((req, res)=>{
//     res.write("Hellow Shreya");
//     res.end();
// });
// server.listen('30035');