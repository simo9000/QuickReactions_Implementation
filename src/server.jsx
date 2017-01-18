var React = require('react')
  , Layout = require('./Components/Layout')
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
    var content = ReactDOMServer.renderToString(
        <HelloWorld from="server.jsx, running on the server" />
    );

    var html = ReactDOMServer.renderToStaticMarkup(
        <Layout content={content} />
        )
    
    res.end(html);
});

app.listen(32456);
console.log('Server running at port 32456');