const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000
const pattern = /^[\/res_pub\/Die]+(\d)+\.[\w]/i;
const pattern1 = /\.[png]/i;

const server = http.createServer((req, res) => {
    try {
        console.log('request made :' , req.url, req.method)
        
        let path = './view/'

            if(req.url == '/') {
                res.setHeader('Content-Type', 'text/html')
                path += 'rolldies.html'
                res.statusCode = 200
            } else if(pattern.test(req.url)){
                if(pattern1.test(req.url)){
                    res.setHeader('Content-Type', 'image/png')
                    path += req.url
                    res.statusCode = 200
                } else {
                    res.setHeader('Content-Type', 'image/svg+xml')
                    path += req.url
                    res.statusCode = 200
                }
                
            }     
            else {
                res.setHeader('Content-Type', 'text/html')
                path += 'rolldies.html'
                res.statusCode = 200
            }

        fs.readFile(path, (err, data) => {
            if (err) console.log(err)
            else {
                res.write(data)
            }
            res.end()
        })

    } catch (error) {
        console.log(err)
    }
})

server.listen(port, () => {
    console.log(`listening for the request port ${port}`)
})
