const { toProperty } = require('../src/csvproperty.js');
const assert = require('assert');

describe('csv-property', function () {
  it('ary to JSON ', function (done) {
    assert.equal(toProperty(), {});
  });
});
