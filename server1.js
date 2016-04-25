//create a node.js web servers

//require http
var http = require('http');

//define a port listen on
var PORT = 8080;
var hit = 0;

//need a function that will handle requests that come into the server
//function to handle all requests
//the request is the client asking for data
//the response is the server giving the data back (response is an object)
function handleRequest (request, response) {
	//response.end is like console.log so if it works it will show the phrase it works it will only show when there is actually something being asked for, it wont work if nothing is being requested
	hit++;
	response.end('<h1>it works!</h1><br><p>'+hit+' HITS COUNT</p>');
}

//set up the server
//create server is the function and then it will call the handle request function created above
var server = http.createServer(handleRequest);

//make the server listen to the specific port you created above & then give it a call back function that will let you know that everything is working okay and that the server is listening
server.listen(PORT, function(){
	console.log('server listening on: http://localhost:%s', PORT);
})
