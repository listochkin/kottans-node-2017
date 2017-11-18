const app = require('./app');

const http = require('http');

module.exports = http.createServer(app);
