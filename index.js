var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var datas = [
	{ 'info': 'exemple 1' },
	{ 'info': 'autre' }
];

app.use(function (req, res, next) {
      console.log(req.method, req.url, req.body);
      next();
  });

app.route('/token')
	.get(function(req, res) {
		res.send('token');
	})

app.route('/datas')
	.get(function(req, res) {
		res.send(datas);
	})
	.post(function(req, res) {
		var data = req.body.data;
		datas.push({'info': data.info});
		res.send(datas);
	})
	.delete(function(req, res) {
		datas = [];
		res.send(datas);
	})

console.log("Serveur lancé au port 3000")
app.listen(3000);