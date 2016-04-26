var http = require('http');
var Twitter = require('twitter');

var keys = require('./keys1.js');
var twitterKeys = keys.twitterKeys;
var client = new Twitter({
	consumer_key: twitterKeys.consumer_key,
	consumer_secret: twitterKeys.consumer_secret,
	access_token_key: twitterKeys.access_token_key,
	access_token_secret: twitterKeys.access_token_secret,
});
var params = {
	screen_name: 'kellsbellslovee',
	trim_user: false,
}
var tweet = '';
var niceThings = ['You are a very lovely human!', 'You have a dazzling soul!', 'It is truly a delight to be around you!'];
var nice = niceThings[Math.floor(Math.random() * niceThings.length)];

var meanThings = ['You smell very bad!', 'You are the devil!', 'The sight of you makes me sick!'];
var mean = meanThings[Math.floor(Math.random() * meanThings.length)];


var PORTONE = 7000;
var PORTTWO = 7500;

//port 7000 tells user something good about themselves
function handleRequestGood (request, response) {
	response.end('<h1>'+nice+'</h1><br><h2>Tweet from kellsbellslovee</h2><br><p>' + tweet + '</p>');
	//twitter function
	client.get('statuses/user_timeline', params, function(error, timeline, response){
		if(!error){
			for(tweet in timeline){
				tweet = timeline[tweet].text;
			}
		} 
	})

}

var serverOne = http.createServer(handleRequestGood);

serverOne.listen(PORTONE, function(){
	console.log('server listening on: http://localhost:%s', PORTONE);
})
//port7500 will always tell the user something bad about themselves
function handleRequestBad (request, response) {
	response.end('<h1>'+mean+'</h1>');
}

var serverTwo = http.createServer(handleRequestBad);

serverTwo.listen(PORTTWO, function(){
	console.log('server listening on: http://localhost:%s', PORTTWO);
})


