// ### 3. Students do `30 minutes`
// * Create a website with 4 routes:
//   * Home
//   * Favorite Food
//   * Favorite Movies
//   * Favorite CSS Frameworks
// * Serve the HTML from files rather than straight in the JavaScript

//require http
var http = require('http');
var fs = require('fs');
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
		
		case '/food':
		    displayFood(url_parts.pathname, req, res);
		break;

		case '/movie':
      		displayMovie(url_parts.pathname, req, res);
      	break;

      	case '/css':
      	    displayCSS(url_parts.pathname, req, res);
      	break;

		default:
			display404(url_parts.pathname, req, res);
	}
}

function displayRoot(url, req, res){
	var myHTML = 
	fs.readFile('./home.html', function(err, html){
		if(err){
			throw err;
		}
		res.writeHead(200, {'Content-type': 'text/html'});
		res.write(html);
		res.end(myHTML);
	})
}

function displayFood(url, req, res){
	var myHTML = 
	fs.readFile('./food.html', function(err, html){
		if(err){
			throw err;
		}
		res.writeHead(200, {'Content-type': 'text/html'});
		res.write(html);
		res.end(myHTML);
	})
}

function displayMovie(url, req, res){
	var myHTML = 
	fs.readFile('./movies.html', function(err, html){
		if(err){
			throw err;
		}
		res.writeHead(200, {'Content-type': 'text/html'});
		res.write(html);
		res.end(myHTML);
	})
}

function displayCSS(url, req, res){
	var myHTML = 
	fs.readFile('./cssframeworks.html', function(err, html){
		if(err){
			throw err;
		}
		res.writeHead(200, {'Content-type': 'text/html'});
		res.write(html);
		res.end(myHTML);
	})
}
function display404(url, req, res){
	
	res.writeHead(404, {'Content-type': 'text/html'});

	res.write("<h1>404</h1><p>page not found!</p>");
	res.end("the page you are looking for " + url + "cannot be found");
}






