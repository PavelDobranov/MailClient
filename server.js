var express = require('express');

var server = express();

var env = process.env.NODE_ENV || 'development';

var config = require('./server/config/config')[env];

require('./server/config/express')(server, config);
require('./server/config/routes')(server);

server.listen(config.port, function() {
  console.log('Server running on port: ' + config.port);
});