const express = require('express');
const expressWebSocket = require('express-ws');
const browserify = require('browserify');

const app = express();
expressWebSocket(app, null, {
  // ws options here
  perMessageDeflate: false
});

const kittens = require('./kittens');
const chat = require('./chat');

app.use('/kittens', kittens);

app.ws('/chat', chat);

app.get('/', (req, res) => {
  res.end(`
  <html>
  <head>
    <meta charset="utf-8">
    </head>
  <body>

  <script src="https://fb.me/react-15.0.0.js"></script>
  <script src="https://fb.me/react-dom-15.0.0.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
  <script type="text/babel">
    var Greeting = React.createClass({
      render: function() {
        return (
          <p>Hello, Universe</p>
        )
      }
    });

    ReactDOM.render(
      <Greeting/>,
      document.getElementById('greeting-div')
    );
  </script>
  <div id="greeting-div"></div>
  <ul id="kittens">
    </ul>
    <button id="more-kittens"></button>
    <script src="bundle.js"></script>
  </body>
  </html>
  `);
});

app.get('/bundle.js', (req, res) => {
  browserify('./src/browser.js')
    .bundle()
    .pipe(res);
});

module.exports = app;
