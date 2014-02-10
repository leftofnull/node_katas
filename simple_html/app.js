var express = require('express'),
    path = require('path');

var app = express(),
    html_dir = './html/';
app.use(express.logger());
app.use(express.static(path.join(__dirname, 'html')));
app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.send(500, err);
});

app.listen(3000);
console.info('Press CTRL+C to stop...');