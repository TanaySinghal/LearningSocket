var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (req, res) {
  //res.send('<h1> Hello world </h1>');
  res.sendFile(__dirname + '/index.html');
});

var port = 3000;
http.listen(port, function() {
  console.log("App listening on port " + port);
});
