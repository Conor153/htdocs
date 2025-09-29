var mysql = require('mysql');

///////////////////////////////////////////////////////////////////////////////////////////

// Setup MySQL connection
// timezone is very NB

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'teamsDB',
  timezone: 'utc+0'  
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database teamsDB`);
});

///////////////////////////////////////////////////////////////////////////////////////////

// GET /teams
exports.getTeams = function(req,res){

    connection.query(`SELECT * FROM teams`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}

// GET /team/ID
exports.getTeam = function(req,res){

    connection.query(`SELECT * FROM teams WHERE id=${req.params.id}`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}

exports.postTeam = function(req,res){
    connection.query(`INSERT INTO teams (id, name) values (${req.body.id}, "${req.body.name}")`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}

exports.putTeam = function(req,res){

    connection.query(`Update teams SET name = "${req.body.name}" WHERE id=${req.body.id}`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}

exports.deleteTeam = function(req,res){

    connection.query(`Delete From teams WHERE id=${req.params.id}`, function(err, rows, fields) {
        if (err) throw err;

        res.status(200);  // OK
        res.send(JSON.stringify(rows));	  
    });	
}
