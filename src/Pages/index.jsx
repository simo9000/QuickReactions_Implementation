var React = require('react');
var ReactDOM = require('react-dom');
var Timestamp = require('../Components/Timestamp');
var HelloWorld = require('../Components/HelloWorld');

ReactDOM.render(
    <HelloWorld from="index.jsx, transformed, bundled,
        and running on the client" />,
  document.getElementById("reactHelloContainer"));

var timestampElement = ReactDOM.render(
    <Timestamp />,
  document.getElementById('reactContainer'));

setInterval(function () {
  timestampElement.setState({
    date: 'Updated through setState: ' + new Date().toString() 
  });
}, 500)
