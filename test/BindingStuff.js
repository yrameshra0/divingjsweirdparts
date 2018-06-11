const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('bind function expressions verifications', () => {
  const nameGreeting = {
    name: 'John Doe',
    greetMe: function() {
      return `Hello ${this.name}`;
    }
  };

  it('Function expression evaluation', () => {
    assert.strictEqual(nameGreeting.greetMe(), 'Hello John Doe');
  });

  it('Function borrowing using assignment', () => {
    const newName = {
      name: 'Sarah Parker'
    };
    newName.greetMe = nameGreeting.greetMe;

    assert.strictEqual(newName.greetMe(), 'Hello Sarah Parker');
  });

  it('Function borrowing using bind', () => {
    const justGreetNoBind = nameGreeting.greetMe;

    assert.strictEqual(justGreetNoBind(), 'Hello undefined');

    const justGreet = nameGreeting.greetMe.bind(nameGreeting);

    assert.strictEqual(justGreet(), 'Hello John Doe');
  });
});

describe('bind function expression verifications with ES6 arrow function expressions', () => {
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
    // do more reading here --
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  });
});
