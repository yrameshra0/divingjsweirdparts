const { assert } = require('chai');

describe('Trying our currying stuff', () => {
  it('Function curry', () => {
    const checkPastLimit = function(limiter, item) {
      return item > limiter;
    };

    const checkLimitSimplified = function (limit) {
        return checkPastLimit.bind(this, limit);
    };

    const originalArray = [1, 2, 3];

    const arrayForCheckingGreaterThanOne = originalArray.map(item => checkLimitSimplified(1)(item));

    assert.deepEqual(arrayForCheckingGreaterThanOne, [false, true, true]);
  });
});
