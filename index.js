var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

console.log("Serveur lancé au port 3000")
app.listen(3000);