const fs = require('fs')
let http = require('http')
const hostname = '127.0.0.1'
const port = 5000
home = fs.readFileSync('index.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')

    if (url == '/') {
        res.end(home)
    }
    else if (url == '/about') {
        res.end('about')
    }
    else {
        res.statusCode = 404
        res.end(`<h1>404 not found</h1>`)
    }
})

server.listen(port, hostname, () => {
    console.log('server is connected')
})

