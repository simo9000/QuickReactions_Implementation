var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('index.js on the server');
}).listen(32456);
console.log('Server running at port 32456');