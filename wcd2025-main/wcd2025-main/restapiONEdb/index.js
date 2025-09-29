var express = require("express");
var bodyParser = require("body-parser");
// 
var model = require('./model/db.js');  //

var app = express();

// serves files in public folder
app.use(express.static('public'));

// NB:: this must be included to get JSON content sent with requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

///////////////////////////////////////////////////////////////////////////////////////////

// REST API /teams GET route
app.route('/teams/')
  .get(function (req, res) {  
    model.getTeams(req, res);
  })

  ///////////////////////////////////////////////////////////////////////////////////////////

// setup REST API /team route VERBS - GET, POST, PUT, DELETE
app.route('/team/:id?')
  .get(function (req, res) {  
    model.getTeam(req, res);
  })
  .post(function (req, res) { // add
    model.postTeam(req, res);
  })
  .put(function (req, res) { // edit
    model.putTeam(req, res);
  })
  .delete(function (req, res) { // delete
    model.deleteTeam(req, res);
  });  


var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
