const { toObject, toCSVString } = require('../src/csv-property.js')
const assert = require('assert')

describe('csv-property', function () {
  it('generate JSON using CSV string', function () {
    assert.deepEqual(toObject('popup, title, Login'), { popup: { title: 'Login' } })
  })
  it('generate JSON using a array of CSV string', function () {
    assert.deepEqual(toObject([
      'popup, title, Login',
      'popup, message, Input name?'
    ]), {
      popup: {
        title: 'Login',
        message: 'Input name?',
      },
    })
  })
  it('convert object to a array of CSV string', function () {
    assert.deepEqual(toCSVString({
      popup: {
        title: 'Login',
        message: 'Input name?',
      },
    }), [
      'popup, title, Login',
      'popup, message, Input name?'
    ])
  })
})

