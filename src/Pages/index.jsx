var React = require('react');
var ReactDOM = require('react-dom');
var Timestamp = require('../Components/Timestamp');
var HelloWorld = require('../Components/HelloWorld');

var helloWorldElement = ReactDOM.render(
    <HelloWorld from="server.jsx, running on the server" />,
  document.getElementById("reactHelloContainer"));

var timestampElement = ReactDOM.render(
    <Timestamp />,
  document.getElementById('reactContainer'));

setInterval(function () {
  helloWorldElement.setState({
    from: 'index.jsx, transformed, bundled, and running on the client'
  });
  timestampElement.setState({
    date: 'Updated through setState: ' + new Date().toString() 
  });
}, 500)
