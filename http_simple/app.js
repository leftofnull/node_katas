var port = 3000;
var ipAddress = '127.0.0.1';

var Http = require('http'),
		HttpCode = require('./http_codes.js').HttpCodes,
		ContentType = require('./contentType.js').ContentTypes,
		Routes = require('./routes.js').Routes;

Http.createServer(function (req, res) {
	for (var i = 0; i < Routes.length; i++) {
		if (Routes[i].path === req.url) {
			console.log(Routes[i]);
			Routes[i].handle(req, res);
			break;
		} else {
			if (i === Routes.length - 1) {
				res.writeHead(HttpCode.BadRequest, {
					'Content-Type': ContentType.text
				});
				res.end('Unknown URL, try again.');
			}
		}
	}
}).listen(port, ipAddress);