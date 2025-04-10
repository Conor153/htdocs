var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var weather = require('./model/weather');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/weather", function(req,res){
	weather.getWeatherData(req,res);
});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});