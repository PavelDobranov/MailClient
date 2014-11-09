'use strict';

module.exports = function(server, config) {
  server.get('/views/:area/:viewName', function(req, res) {
    res.render(config.rootPath + '/public/app/views/' + req.params.area + '/' + req.params.viewName);
  });

  server.get('/', function(req, res) {
    res.render('index');
  });
};
