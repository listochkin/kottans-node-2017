const add = require('./index');

describe('Tests', () => {
  it('should pass', async () => {
    expect(add(1, 3)).toEqual(4);
  });
});
