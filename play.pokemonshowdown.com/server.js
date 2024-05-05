// var http = require('http');
// var fs = require('fs');

const PORT= process.env.PORT || 443; 

// fs.readFile('./play.pokemonshowdown.com/index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });

var express = require('express');
var app = express();
// app.use(express.static('./play.pokemonshowdown.com/index.html')); //__dir and not _dir
// // var port = 8000; // you can use any port
// app.listen(PORT);
// console.log('server on' + port);


app.use(express.static('./play.pokemonshowdown.com'));

// Define route to serve index.html
app.get('*', (req, res) => {
  res.sendFile('./play.pokemonshowdown.com/index.template.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});