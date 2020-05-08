const { toObject } = require('../src/csv-property.js');
const assert = require('assert');

describe('csv-property', function () {
  it('csv string to JSON ', function () {
    assert.deepEqual(toObject("apple, color, red"), { apple: { color: 'red' } });
  });
});

