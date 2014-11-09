'use strict';

var express = require('express'),
  favicon = require('serve-favicon');

module.exports = function(server, config) {
  server.set('view engine', 'jade');
  server.set('views', config.rootPath + '/server/views');
  server.use(express.static(config.rootPath + '/public'));
  server.use(favicon(config.rootPath + '/public/favicon.ico'));
};
