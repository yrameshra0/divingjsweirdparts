const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('Trying to grab this in ES6 Arrows', () => {
  // do more reading here --
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

  it('Arrow functions do not have this', () => {
    const nameGreeting = {
      name: 'John Doe',
      greetMe: () => {
        return `Hello ${this.name}`;
      }
    };

    assert.strictEqual(nameGreeting.greetMe(), 'Hello undefined');
  });

  it('Arrow functions use this from the closed scope', () => {
    const nameGreeting = (() => {
      this.name = 'John Doe';

      this.greetMe = () => {
        return `Hello ${this.name}`;
      };

      return this;
    })();
    assert.strictEqual(nameGreeting.greetMe(), 'Hello John Doe');
  });
});
