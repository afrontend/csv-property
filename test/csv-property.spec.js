const { toProperty } = require('../src/csv-property.js');
const assert = require('assert');

describe('csv-property', function () {
  it('csv string to JSON ', function () {
    assert.deepEqual(toProperty("name, color, red"), { name: { color: 'red' } });
  });
});
