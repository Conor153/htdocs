var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nba2018'
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database d3`);
});
exports.getData = function(req,res){
	connection.query("SELECT AGE as age, Count(AGE) as freq FROM players GROUP BY AGE ORDER BY AGE", function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));	  
	});	
}