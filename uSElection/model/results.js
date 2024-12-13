var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'uselections'
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database uselections`);
});


exports.getResults = function(req,res){

	var year = req.params.year;
	connection.query(`SELECT * FROM pres_votes WHERE year = ${year} order by state_name, candidate_name`, function(err, rows, fields) {
	  if (err) throw err;
	
	  res.send(JSON.stringify(rows));
	  
	});
	
}


exports.UpdateResults = function(req,res){

	var abbr= req.body.abbr;
	var votes = req.body.votes;
	var candidate_name = req.body.name;
	connection.query(`UPDATE pres_votes SET votes = ${votes} WHERE state_abbr = '${abbr}' AND candidate_name  = '${candidate_name}' AND year = 2024`, function(err, rows, fields) {
	  if (err) throw err;
	
	  res.send(JSON.stringify(rows));
	  
	});
	
}

