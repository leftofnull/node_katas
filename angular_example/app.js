'use strict';

var express = require('express'),
    path = require('path');

var app = express();
app.use(function(err, req, res, next) {
  // This will run any time there is an unhandled
  // exception on the server.
  console.log(err.stack);
  res.send(500, err);
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.info('Press CTRL+C to end...');