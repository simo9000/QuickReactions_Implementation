var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , HelloWorld = require('./Components/HelloWorld')
  , express = require('express')
  , path = require('path');

var app = express();

app.use('/Components',
  express.static(path.join(path.join(__dirname, '..'),
    'Components')));

app.use('/assets',
  express.static(path.join(path.join(__dirname, '..'),
    'assets')));

app.get('/', function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var html = ReactDOMServer.renderToString(
        <html>
            <head>
                <title>Hello World</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
                <script src="/Components/Timestamp.js"></script>
            </head>
            <body>
                <HelloWorld from="index.jsx on the server" />
                <div id="reactContainer" />
                <script src="/assets/index.js"></script>
            </body>
        </html>
    );
    
    res.end(html);
});

app.listen(32456);
console.log('Server running at port 32456');