// index.js
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'music'
});

connection.connect();
var query="SELECT * FROM album WHERE artist_id = 1";
connection.query(query, function(err, rows) {
  if (err) throw err;
  console.log(JSON.stringify(rows));
  // OR
  for(var i=0;i<rows.length;i++)
    console.log(rows[i].album_name);
});
connection.end();
