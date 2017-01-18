var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , HelloWorld = require('./Components/HelloWorld')
  , express = require('express')
  , path = require('path');

var app = express();

app.use('/Pages',
  express.static(path.join(__dirname, 'Pages')));

app.get('/', function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var html = ReactDOMServer.renderToString(
        React.createElement("html", null, 
            React.createElement("head", null, 
                React.createElement("title", null, "Hello World")
            ), 
            React.createElement("body", null, 
                React.createElement("div", {id: "reactContainer"}), 
                React.createElement("div", {id: "reactHelloContainer"}, 
                    React.createElement(HelloWorld, {from: "server.jsx on the server"})
                ), 
                React.createElement("script", {src: "/pages/index.js"})
            )
        )
    );
    
    res.end(html);
});

app.listen(32456);
console.log('Server running at port 32456');