global.window = {};
global.jQuery = require('jquery');
const { assert } = require('chai');
require('../src/index');

describe('Utility library for greeting', () => {
  const greetr = window.G$('John', 'Doe');
  it('Greets our users', () => {
    assert.deepEqual(greetr.greet().greeting(), 'Hello John !');
  });
});
