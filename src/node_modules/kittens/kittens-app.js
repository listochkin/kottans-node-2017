const KITTENS = [
  { id: 11, name: 'Moorzik', color: 'stripy yellowish' },
  { id: 12, name: 'Bantik', color: 'three-colored and very bright' },
  { id: 13, name: 'Barsik', color: 'cute gray' }
];

module.exports = (req, res) => {
  res.json(KITTENS);
};
