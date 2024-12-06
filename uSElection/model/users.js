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


exports.getUsers = function(req,res){

	connection.query("SELECT * FROM users", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}

exports.checkLogin = function(req,res){
	var email = req.params.email;
	var password = req.params.password;
	connection.query(`SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`, function(err, rows, fields) {
	  if (err) throw err;
	
	if(rows.length == null)
	{
		res.send("Invalid Credentials");
	}
		
	else
	{
		res.send(JSON.stringify(rows));
	}
	  
	});
	
}