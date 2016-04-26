//require http
var http = require('http');
var url = require('url');

//define a port listen on
var PORT = 8080;
var hit = 0;

//set up the server
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('server listening on: http://localhost:%s', PORT);
})

//function to handle all requests
function handleRequest(req, res){
	
	//res.end(req.url);

	var url_parts = url.parse(req.url);

	switch(url_parts.pathname){
		case '/':
			displayRoot(url_parts.pathname, req, res);
		break;
		
		case '/movie':
      		displayMovie(url_parts.pathname, req, res);
      	break;

		default:
			display404(url_parts.pathname, req, res);
	}
}

function displayRoot(url, req, res){
	var myHTML = '<html>';
	myHTML += '<body><h1>home page</h1>';
	myHTML += '</body></html>'

	res.writeHead(200, {'Content-type': 'text/html'});

	res.end(myHTML);
}

function displayMovie(url, req, res){
	var myHTML = '<html>';
	myHTML += '<body><h1>Movie</h1>';
	myHTML += '<p>Point Break is a sweet movie!</p>'
	myHTML += '</body></html>'

	res.writeHead(200, {'Content-type': 'text/html'});

	res.end(myHTML);
}

function display404(url, req, res){
	
	res.writeHead(404, {'Content-type': 'text/html'});

	res.write("<h1>404</h1><p>page not found!</p>");
	res.end("the page you are looking for " + url + "cannot be found");
}






