var http = require('http')
  , React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , HelloWorld = require('./Components/HelloWorld')
  , fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var body = ReactDOMServer.renderToString(
        <body>
            <HelloWorld from="index.jsx on the server" />
            <div id="reactContainer" />
        </body>);

    res.end('<html><head><title>Hello World</title>' + 
            '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>' + 
            '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>' +
            '<head>' + 
            '<script>' +
            fs.readFileSync('./Components/TimeStamp.js') +
            '</script>' +
            body +
            '<script>' +
            'var timestampInstance = React.createFactory(Timestamp)();' +
            'var timestampElement = ReactDOM.render(timestampInstance, ' +
            '    document.getElementById("reactContainer"));' +
            'setInterval(function() {' +
            '   timestampElement.setState({' +
            '       date: "Updated through setState: " + ' + 
            '           new Date().toString() }) }, 500)' +
            '</script>' +
            '</html>'
        );
}).listen(32456);
console.log('Server running at port 32456');