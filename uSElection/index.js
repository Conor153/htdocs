var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var pres_votes = require('./model/pres_votes');
var states = require("./model/states");
var users = require("./model/users");
var navData = require("./nav.js");
var footerData = require("./footer.js");


var app = express();
app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/pres_votes", function(req,res){
	pres_votes.getPres_votes(req,res);
});

app.get("/states", function(req,res){
	states.getStates(req,res);
});

app.get("/users", function(req,res){
	users.getUsers(req,res);
});

app.get("/nav", function(req,res){
	res.send(navData);
});

app.get("/footer", function(req,res){
	res.send(footerData);
});


app.get("/results/:year?", function(req,res){
	res.send(_.where(resultData.results,{year: req.params.year}));
});

app.post("/teams/add", function(req,res){	
	console.log(req.body);
	teamData.teams.push(req.body);
	res.send(202);
});

var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});