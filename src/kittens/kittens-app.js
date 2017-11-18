const express = require('express');

const app = express();

const KITTENS = [
  { id: 11, name: 'Moorzik', color: 'stripy yellowish' },
  { id: 12, name: 'Bantik', color: 'three-colored and very bright' },
  { id: 13, name: 'Barsik', color: 'cute gray' }
];

app.get('/', (req, res) => {
  res.json(KITTENS);
});

module.exports = app;
