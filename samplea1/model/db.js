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

	connection.query("???????????", function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}

// getCompanies
// ???


// getUsersByID
exports.getUsersByID = function(req,res){

	connection.query(`???`, function(err, rows, fields) {
	  if (err) throw err;

	  res.send(JSON.stringify(rows));
	  
	});
	
}


// addCompany
exports.addCompany = function(req,res){

	connection.query(`INSERT INTO ??? VALUES ('???')`, function(err, rows, fields) {
	  if (err) throw err;

	  
	});
	
}


// deleteCompany
// ???