var http = require('http');
var fs = require('fs');

const PORT= process.env.PORT || 443; 

fs.readFile('./play.pokemonshowdown.com/index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/public')); //__dir and not _dir
// // var port = 8000; // you can use any port
// app.listen(PORT);
// // console.log('server on' + port);