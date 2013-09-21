var	HttpCode = require('./http_codes.js').HttpCodes,
		ContentType = require('./contentType.js').ContentTypes;

exports.Routes = [
	{ 
		path: '/', 
		handle: function(req, res) {
			if (assert(req, res)) {
				if (req.method === 'GET') {
					res.writeHead(HttpCode.OK, {
						'Content-Type': ContentType.text
					});
					res.end('Huzzah!');
				} else {
					res.writeHead(ContentType.NotImplemented, {
						'Content-Type': ContentType.text
					});
					res.end('Method has not been implemented');
				}
			}
		}
	}
];

var assert = function(req, res) {
	if (!req || !req.method) {
		res.writeHead(HttpCode.InternalServerError, {
			'Content-Type': ContentType.text
		});
		res.end('Could not parse request');
		return false;
	}
	return true;
}