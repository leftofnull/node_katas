var express = require('express'),
		httpCode = require('./http_codes.js').HttpCodes,
		contentType = require('./contentType.js').ContentTypes;

var app = express();

app.use(express.compress());
app.use(express.json());
app.use(express.urlencoded());
app.use(function (err, req, res, next) {
	console.log(err.stack);
	res.send(httpCode.InternalServerError, err);
});

app.get('/', function (req, res) {
	var body = 'Huzzah!';
	res.set({
		'Content-Type': contentType.text,
		'Content-Length': body.length
	});
	res.end(httpCode.OK, body);
});

app.get('/express', function (req, res) {
	res.send(httpCode.OK, 'Less typing Huzzah!');
});

app.listen(3000);
