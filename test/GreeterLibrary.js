global.window = {};
global.jQuery = require('jquery');
const { assert } = require('chai');
require('../src/index');

describe('My greets for all', () => {
  const greetr = window.G$('John', 'Doe');
  it('Greets our users', () => {
    assert.deepEqual(greetr.greet().greeting(), 'Hello John !');
  });

  it('Say causally', () => {
    assert.deepEqual(greetr.greet().greeting(), 'Hello John !');
  });

  it('Say formally', () => {
    assert.deepEqual(greetr.greet().formalGreeting(), 'Greetings John Doe');
  });

  it('Say causally in spanish', () => {
    assert.deepEqual(
      greetr
        .greet()
        .setLang('es')
        .greeting(),
      'Hallo John !'
    );
  });

  it('Say formally in spanish', () => {
    assert.deepEqual(
      greetr
        .greet()
        .setLang('es')
        .formalGreeting(),
      'Saludos John Doe'
    );
  });
});
