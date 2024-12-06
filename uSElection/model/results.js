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

	var abbrv= req.params.abbrv;
	var votes = req.params.votes;
	var votes = req.params.year;

	connection.query(`SELECT * FROM pres_votes WHERE year = ${year} order by state_name, candidate_name`, function(err, rows, fields) {
	  if (err) throw err;
	
	  res.send(JSON.stringify(rows));
	  
	});
	
}

