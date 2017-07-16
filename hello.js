<<<<<<< HEAD
var http = require("http");
var express = require("express");
var util = require('./utils.js');

var app = express();

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/', util.getCountryCode());
=======
console.log("Hello World");
>>>>>>> 0a816a9a5c7ba50071abbe2bb235f94824e09328
