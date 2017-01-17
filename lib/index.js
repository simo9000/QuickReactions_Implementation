var http = require('http');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(
        ReactDOMServer.renderToString(
            React.createElement("html", null, 
            React.createElement("head", null, 
              React.createElement("title", null, "Hello World")
            ), 
            React.createElement("body", null, 
              "index.jsx compiled into index.js by hand on the server"
            )
          )
        )
    );
}).listen(32456);
console.log('Server running at port 32456');