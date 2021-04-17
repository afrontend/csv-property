const { toObject, toCSVString } = require('../src/csv-property.js')
const assert = require('assert')

describe('csv-property', function () {
  it('generate JSON using CSV string', function () {
    assert.deepEqual(toObject('popup, title, Login'), { popup: { title: 'Login' } })
  })
  it('generate JSON using an array of CSV string', function () {
    assert.deepEqual(toObject([
      'key1, key2, key3, dupplicated id',
      'key1, key2, key4, no auth'
    ]), {
      key1: {
        key2: {
          key3: 'dupplicated id',
          key4: 'no auth'
        }
      },
    })
  })
  it('convert object to an array of CSV string', function () {
    assert.deepEqual(toCSVString({
      key1: {
        key2: {
          key3: 'dupplicated id',
          key4: 'no auth'
        }
      },
    }), [
      'key1, key2, key3, dupplicated id',
      'key1, key2, key4, no auth'
    ])
  })
  it('generate JSON using CSV string with delimiter', function () {
    assert.deepEqual(toObject('popup; title; Login', ';'), { popup: { title: 'Login' } })
  })
  it('generate JSON using an array of CSV string with delimiter', function () {
    assert.deepEqual(toObject([
      'key1; key2; key3; dupplicated id',
      'key1; key2; key4; no auth'
    ], ';'), {
      key1: {
        key2: {
          key3: 'dupplicated id',
          key4: 'no auth'
        }
      },
    })
  })
  it('convert object to an array of CSV string with delimiter', function () {
    assert.deepEqual(toCSVString({
      key1: {
        key2: {
          key3: 'dupplicated id',
          key4: 'no auth'
        }
      },
    }, ';'), [
      'key1; key2; key3; dupplicated id',
      'key1; key2; key4; no auth'
    ])
  })
  it('generate JSON using an array of CSV string with delimiter (CSV string can be 0, 1, ...)', function () {
    assert.deepEqual(toObject([
      'key1; key2; 0; dupplicated id',
      'key1; key2; 1; no auth'
    ], ';'), {
      key1: {
        key2: {
          0: 'dupplicated id',
          1: 'no auth'
        }
      },
    })
  })
})



