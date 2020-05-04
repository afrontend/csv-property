const { toProperty } = require('../src/csvproperty.js');
const assert = require('assert');

describe('csv-property', function () {
  it('csv string to JSON ', function (done) {
    assert.deepEqual(toProperty("name, color, red"), { name: { color: 'red' } });
  });
});
