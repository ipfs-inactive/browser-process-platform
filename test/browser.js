/* eslint-env mocha */
'use strict'

const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
chai.use(dirtyChai)

const supportedPlatforms = [
  'freebsd', 'linux', 'darwin', 'opensd', 'sunos', 'win32']

describe('browser process platform in the Browser', () => {
  it('should work as module', (done) => {
    const platform = require('../src/index.js')
    expect(platform).to.be.oneOf(supportedPlatforms)
    done()
  })

  it('should work as monkey patch', (done) => {
    process.platform = require('../src/index.js')
    expect(process.platform).to.be.oneOf(supportedPlatforms)
    done()
  })
})
