<h1 align="center"> helper助手库 </h1>

## Installing

```shell
$ npm i @wuchuhengtools/helper

```

## Usage

``` typescript
import {fileToBase64, obj2Query, query2Obj, getHash} from "@wuchuhengtools/helper"

fileToBase64(file).then(bash64 => console.log(bash64)) // image:sdafasfasd....
obj2Query({foo: 1, bar: 2}) // return ?foo=1&bar=2
query2Obj('foo=1&bar=2') // return {bar: 2, foo: 1}
getHash('1234')  // sdfkasjfasdkskskfsadf ...
getHash('1234')  // sdfkasjfasdkskskfsadf ...
copyStringToClipboard(str: string) // coped string

```
## Contributing

You can contribute in one of three ways:

1. File bug reports using the [issue tracker](https://github.com/wuchuhengtools/helper/issues).
2. Answer questions or fix bugs on the [issue tracker](https://github.com/wuchuhengtools/helper/issues).
3. Contribute new features or update the wiki.

_The code contribution process is not very formal. You just need to make sure that you follow the PSR-0, PSR-1, and PSR-2 coding guidelines. Any new code contributions must be accompanied by unit tests where applicable._

## License

MIT
