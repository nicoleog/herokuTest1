var http = require('http');
var port = process.env.PORT || 3000;
console.log("heloo");
http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>Hello World!</h2>");
    res.write("success");
    res.end();
}).listen(port);