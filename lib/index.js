var http = require('http')
  , React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , HelloWorld = require('./Components/HelloWorld');

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
                React.createElement(HelloWorld, null), 
                React.createElement("div", null, 
                    "Rendered from the server!"
                )
            )
          )
        )
    );
}).listen(32456);
console.log('Server running at port 32456');