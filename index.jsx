var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , HelloWorld = require('./Components/HelloWorld')
  , express = require('express')
  , path = require('path');

var app = express();

app.use('/Components',
  express.static(path.join(__dirname, 'Components')));

app.use('/assets',
  express.static(path.join(__dirname, 'assets')));

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
                <HelloWorld from="index.jsx on the server" />
                <div id="reactContainer" />
                <div id="reactHelloContainer"></div>
                <script src="/assets/index.js"></script>
            </body>
        </html>
    );
    
    res.end(html);
});

app.listen(32456);
console.log('Server running at port 32456');