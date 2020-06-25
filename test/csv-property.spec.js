const { toObject, toCSVString } = require('../src/csv-property.js')
const assert = require('assert')

describe('csv-property', function () {
  it('generate JSON using CSV string', function () {
    assert.deepEqual(toObject('popup, title, Login'), { popup: { title: 'Login' } })
  })
  it('generate JSON using an array of CSV string', function () {
    assert.deepEqual(toObject([
      'popup, error, dupError, dupplicated id',
      'popup, error, authError, no auth'
    ]), {
      popup: {
        error: {
          dupError: 'dupplicated id',
          authError: 'no auth'
        }
      },
    })
  })
  it('convert object to an array of CSV string', function () {
    assert.deepEqual(toCSVString({
      popup: {
        error: {
          dupError: 'dupplicated id',
          authError: 'no auth'
        }
      },
    }), [
      'popup, error, dupError, dupplicated id',
      'popup, error, authError, no auth'
    ])
  })
  it('generate JSON using CSV string with delimiter', function () {
    assert.deepEqual(toObject('popup; title; Login', ';'), { popup: { title: 'Login' } })
  })
  it('generate JSON using an array of CSV string with delimiter', function () {
    assert.deepEqual(toObject([
      'popup; error; dupError; dupplicated id',
      'popup; error; authError; no auth'
    ], ';'), {
      popup: {
        error: {
          dupError: 'dupplicated id',
          authError: 'no auth'
        }
      },
    })
  })
  it('convert object to an array of CSV string with delimiter', function () {
    assert.deepEqual(toCSVString({
      popup: {
        error: {
          dupError: 'dupplicated id',
          authError: 'no auth'
        }
      },
    }, ';'), [
      'popup; error; dupError; dupplicated id',
      'popup; error; authError; no auth'
    ])
  })
  it('generate JSON using an array of CSV string with delimiter (CSV string can be 0, 1, ...)', function () {
    assert.deepEqual(toObject([
      'popup; error; 0; dupplicated id',
      'popup; error; 1; no auth'
    ], ';'), {
      popup: {
        error: {
          0: 'dupplicated id',
          1: 'no auth'
        }
      },
    })
  })
})



