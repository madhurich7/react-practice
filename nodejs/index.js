var http = require('http');
var server = http.createServer(function(request, response){
	response.write("We rendered the page C'mon congo");
	response.end();
})
server.listen(8000, function(){
	console.log('server is running on port 8000');
});
