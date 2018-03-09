/* eslint-env mocha */
'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const platform = require('../src/index.js')

describe('browser process platform in Node.js', () => {
  it('should work equal process.platform', (done) => {
    expect(platform).to.equal(process.platform)
    done()
  })
})
