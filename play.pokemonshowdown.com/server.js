var http = require('http');
var fs = require('fs');

const PORT= process.env.PORT || 10000; 

fs.readFile('./play.pokemonshowdown.com/testclient.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});