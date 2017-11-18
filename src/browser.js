const websocket = require('websocket-stream');

const ws = websocket('ws://localhost:3000/chat');

const kittens = [];
document.getElementById('more-kittens').addEventListener('click', () => {
  ws.write({
    command: 'more',
    currentNofKittens: kittens.length
  });
});

ws.on('data', data => {
  const list = document.getElementById('kittens').innerHTML;
  document.getElementById('kittens').innerHTML = `${list}
    <li>${data.name}</li>
  `;
});
