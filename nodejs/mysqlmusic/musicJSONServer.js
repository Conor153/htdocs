var http = require("http");
var mysql = require('mysql');

// setup the MySQL connection data
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'music'
});
// make MySQL server connection
connection.connect();
var myServer = http.createServer(function(request, response) {
    
    var query="SELECT * FROM artist";
    // run the query using the connection 
    connection.query(query, function(err, rows) {
        if (err) throw err;
        console.log(JSON.stringify(rows));
        response.writeHead(200, {"Content-Type": "text/json"});
        response.write(JSON.stringify(rows));
        response.end();
    });
   
});
myServer.listen(3000);
console.log("Server listening on port 3000");