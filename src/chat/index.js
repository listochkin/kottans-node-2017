const kittens = require('../kittens').KITTENS;

const websocketStream = require('websocket-stream/stream');

const chat = (ws /* , req */) => {
  const stream = websocketStream(ws, {
    // websocket-stream options here
  });

  stream.on('data', data => {
    if (data.command === 'more') {
      stream.write(kittens[data.currentNofKittens % kittens.length]);
    }
  });
};

module.exports = chat;
