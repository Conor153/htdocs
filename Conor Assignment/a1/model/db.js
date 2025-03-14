var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'usersDB'
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database usersDB`);
});


// getUsers
exports.getUsers = function(req,res){

	connection.query("Select * FROM users", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}

// getCompanies
exports.getCompanies = function(req,res){

	connection.query("Select * FROM company", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}


// getUsersByID
exports.getUsersByID = function(req,res){

	var userID = req.params.userID;
	connection.query(`Select * FROM users WHERE id = "${userID}"`, function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}


// addCompany
exports.addCompany = function(req,res){
	console.log(req.body)

	connection.query(`INSERT INTO company VALUES ('${req.value}')`, function(err, rows, fields) {
	  if (err) throw err;

	  
	});
	
}


// deleteCompany
exports.DeleteCompany = function(req,res){

	connection.query(`Delete INTO company VALUES ('???')`, function(err, rows, fields) {
	  if (err) throw err;

	  
	});
	
}