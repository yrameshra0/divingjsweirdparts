const { assert } = require('chai');

describe('Use of self', () => {
  it("Pointing 'this' to 'self'", () => {
    let value = {
      name: 'original name',
      lostNameProblem: function() {
        assert.equal(this.name, 'original name');

        let setName = function() {
          this.name = 'modified name';
        };

        setName();
        // We don't see the name change on 'this'
        assert.notEqual(this.name, 'modified name');
      },

      ourNameIsWithUs: function() {
        let self = this;
        assert.equal(self.name, 'original name');

        let setName = function() {
          self.name = 'modified name';
        };

        setName();
        assert.equal(self.name, 'modified name');
      }
    };

    value.lostNameProblem();
    value.ourNameIsWithUs();
  });
});
