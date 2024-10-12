var http = require("http");
var data = require("./data/clubs");

var myServer = http.createServer(function(request, response) {
   response.writeHead(200, {"Content-Type": "text/json"});
   response.write(JSON.stringify(data));
   response.end();
});

myServer.listen(3000);
console.log("Server listening on port 3000");
