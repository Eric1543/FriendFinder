var express = require('express');
var body-parser = require('body-barser');
var path = require('path');

var app = express();

var PORT = 8080;

app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});