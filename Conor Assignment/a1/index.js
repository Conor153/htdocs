var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var db = require('./model/db');

var app = express();
app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//
// /users
//
app.get("/users", function(req,res){
	db.getUsers(req,res);
});

//
// /companies
//
app.get("/companies", function(req,res){
	db.getCompanies(req,res);
});


//
// /users/:userID
//
app.get("/users/:userID?", function(req,res){
	db.getUsersByID(req,res);
});

// 
// /companies/add
//
app.post("/companies/add", function(req,res){	
	console.log(req.body);
	db.addCompany(req,res);
	res.send(201);
});

// 
// /companies/delete
//
app.post("/companies/delete", function(req,res){	
	console.log(req.body);
	db.addCompany(req,res);
	res.send(201);
});



var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});