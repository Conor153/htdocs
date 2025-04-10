var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : `weatherdb`
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database weatherDB`);
});

exports.getWeatherData = function(req,res){

	connection.query("Select * from weatherdata", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	});
	
}
