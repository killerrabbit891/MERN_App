var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('app listening on port', port);
});