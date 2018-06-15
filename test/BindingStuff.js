const { describe, it } = require('mocha');
const { assert } = require('chai');

describe('Tring binding function expressions', () => {
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
