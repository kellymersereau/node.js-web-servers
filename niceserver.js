var http = require('http');
var Twitter = require('twitter');

var PORTONE = 7000;
var PORTTWO = 7500;

//port 7000 tells user something good about themselves
function handleRequestGood (request, response) {
	response.end('<h1> Nice thing about user </h1>');
}

var serverOne = http.createServer(handleRequestGood);

server.listen(PORTONE, function(){
	console.log('server listening on: http://localhost:%s', PORTONE);
})
//port7500 will always tell the user something bad about themselves
function handleRequestBad (request, response) {
	response.end('<h1> Mean thing about user </h1>');
}

var serverOne = http.createServer(handleRequestBad);

server.listen(PORTTWO, function(){
	console.log('server listening on: http://localhost:%s', PORTTWO);
})