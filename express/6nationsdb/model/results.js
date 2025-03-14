var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : '6nationsdb',
  //multipleStatements: true
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database 6nationsdb`);
});


exports.getResults = function(req,res){

	// var q1 = "SELECT * FROM results";
	// var q2 = "DELETE FROM () WHERE ()";
	//${} ${} [1,2]

	//Multiple query
	//Data[0] get first set of data from array


	connection.query("SELECT * FROM results", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}

 