const { toObject, toCSVString } = require('../src/csv-property.js');
const assert = require('assert');

describe('csv-property', function () {
  it('generate JSON using csv string', function () {
    assert.deepEqual(toObject('apple, color, red'), { apple: { color: 'red' } });
  });
  it('generate JSON using a array of csv string', function () {
    assert.deepEqual(toObject([
      'apple, color, red',
      'banana, color, yellow',
      'melon, color, green'
    ]), {
      apple: { color: 'red' },
      banana: { color: 'yellow' },
      melon: { color: 'green' }
    });
  });
  it('convert object to csv string', function () {
    assert.deepEqual(toCSVString({
      apple: { color: 'red' },
      banana: { color: 'yellow' },
      melon: { color: 'green' }
    }), [
      'apple, color, red',
      'banana, color, yellow',
      'melon, color, green'
    ]);
  });
});

