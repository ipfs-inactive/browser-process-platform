## This repository has been archived!

*This IPFS-related repository has been archived, and all issues are therefore frozen*. If you want to ask a question or open/continue a discussion related to this repo, please visit the [official IPFS forums](https://discuss.ipfs.io).

We archive repos for one or more of the following reasons:

- Code or content is unmaintained, and therefore might be broken
- Content is outdated, and therefore may mislead readers
- Code or content evolved into something else and/or has lived on in a different place
- The repository or project is not active in general

Please note that in order to keep the primary IPFS GitHub org tidy, most archived repos are moved into the [ipfs-inactive](https://github.com/ipfs-inactive) org.

If you feel this repo should **not** be archived (or portions of it should be moved to a non-archived repo), please [reach out](https://ipfs.io/help) and let us know. Archiving can always be reversed if needed.

---
   
# browser-process-platform

> Browser shim for Node.js `process.platform`.

See [documentation at nodejs.org](https://nodejs.org/api/process.html#process_process_platform).


## Background

When running tests in Node.js as well as in the Browser, you might want to skip tests depending on the platform. With this shim it is possible to use `process.platform` independent of the environment.

I’d like to thank [@kumavis](https://github.com/kumavis) for his [browser-process-hrtime module](https://github.com/kumavis/browser-process-hrtime), it was a great inspiration to create this module.


## Install

```sh
> npm install browser-process-platform
```


## Usage

### Via monkey-patching

```JavaScript
process.platform = require('browser-process-platform')
console.log('The current platform is:', process.platform)

```
### As module

```JavaScript
const platform = require('browser-process-platform')
console.log('The current platform is:', platform)
```


## Maintainers

[@vmx](https://github.com/vmx)


## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/ipfs/browser-process-platform)!

This repository falls under the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md) and follows the [IPFS guidelines for JavaScript projects](https://github.com/ipfs/community/blob/master/js-code-guidelines.md).

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.


## License

[MIT](LICENSE) © 2018 Protocol Labs, Inc.
