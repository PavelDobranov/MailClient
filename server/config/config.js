var path = require('path');

var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
  development: {
    port: 3030,
    rootPath: rootPath
  },
  production: {
    port: process.env.PORT,
    rootPath: rootPath
  }
};
