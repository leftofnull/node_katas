var HTTP_CODE_OK = 200,
		HTTP_CODE_CREATED = 201,
		HTTP_CODE_BAD_REQUEST = 401;
var port = 3000;
var ipAddress = '127.0.0.1';
var CONTENT_TYPE_TEXT = 'text/plain',
		CONTENT_TYPE_JSON = 'application/json';

var routes = [{ 
			path: '/',
			handle: root
		}];

var http = require('http');
http.createServer(function (req, res) {
	for (var i = 0; i < routes.length; i++) {
		if (routes[i].path === req.url) {
			console.log(routes[i]);
			routes[i].handle(req, res);
			break;
		} else {
			if (i === routes.length - 1) {
				res.writeHead(HTTP_CODE_BAD_REQUEST, {
					'Content-Type': CONTENT_TYPE_TEXT
				});
				res.end('Unknown URL, try again stupid.');
			}
		}
	}
}).listen(port, ipAddress);

var root = function (req, res) {
	if (req.method === 'GET') {
		res.writeHead(HTTP_CODE_OK, {
			'Content-Type': CONTENT_TYPE_TEXT
		});
		res.end('Huzzah!');
	}
}