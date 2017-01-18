var React = require('react');
var ReactDOM = require('react-dom');
var Timestamp = require('../Components/Timestamp');
var HelloWorld = require('../Components/HelloWorld');

var timestampInstance = React.createFactory(Timestamp)();

var timestampElement = ReactDOM.render(timestampInstance,
  document.getElementById('reactContainer'));

setInterval(function () {
  timestampElement.setState({
    date: 'Updated through setState: ' + new Date().toString() 
  });
}, 500)

var helloInstance = React.createFactory(HelloWorld)({ from: "index.jsx, transformed and running on the client" });
var helloElement = ReactDOM.render(helloInstance,
  document.getElementById("reactHelloContainer"));