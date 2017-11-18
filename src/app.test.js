const app = require('./app');
const http = require('http');
const request = require('request');

describe('Tests', () => {
  let server;
  beforeEach(() => {
    server = http.createServer(app);
    server.listen(5865);
  });
  afterEach(() => {
    if (server) {
      server.close();
      server = null;
    }
  });

  it('should list kittens', done => {
    request.get(
      'http://localhost:5865/kittens',
      { json: true },
      (err, res, body) => {
        expect(body.map(k => k.id)).toEqual([11, 12, 13]);
        done();
      }
    );
  });
});
