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
            <html>
            <head>
              <title>Hello World</title>
            </head>
            <body>
                <HelloWorld />
                <div>
                    Rendered from the server!
                </div>
            </body>
          </html>
        )
    );
}).listen(32456);
console.log('Server running at port 32456');