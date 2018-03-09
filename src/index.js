'use strict'
// https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today
var platform = function (navigatorPlatform) {
  var match = navigatorPlatform.match(/^FreeBSD|^Linux|^Mac|^OpenBSD|^SunOS|^Win/)
  switch (match[0]) {
    case 'FreeBSD':
      return 'freebsd'
    case 'Linux':
      return 'linux'
    case 'Mac':
      return 'darwin'
    case 'OpenBSD':
      return 'opensd'
    case 'SunOS':
      return 'sunos'
    case 'Win':
      return 'win32'
    default:
      return undefined
  }
}

module.exports = process.platform || platform(navigator.platform)
