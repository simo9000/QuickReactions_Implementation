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
        <html>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <div id="reactContainer" />
                <div id="reactHelloContainer">
                    <HelloWorld from="server.jsx on the server" />
                </div>
                <script src="/pages/index.js"></script>
            </body>
        </html>
    );
    
    res.end(html);
});

app.listen(32456);
console.log('Server running at port 32456');