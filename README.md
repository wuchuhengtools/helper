<h1 align="center"> 助手库 </h1>

[comment]: <> ([![Build Status]&#40;https://travis-ci.org/wuchuhengtools/gbk-parser.svg?branch=master&#41;]&#40;https://travis-ci.org/wuchuhengtools/gbk-parser&#41;)

[comment]: <> ([![codecov]&#40;https://codecov.io/gh/wuchuhengtools/gbk-parser/branch/master/graph/badge.svg?token=R4VV625A4V&#41;]&#40;https://codecov.io/gh/wuchuhengtools/gbk-parser&#41;)

[comment]: <> ([![FOSSA Status]&#40;https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwuchuhengtools%2Fgbk-parser.svg?type=shield&#41;]&#40;https://app.fossa.com/projects/git%2Bgithub.com%2Fwuchuhengtools%2Fgbk-parser?ref=badge_shield&#41;)

## Installing

```shell
$ npm i @wuchuhengtools/helper

```

## Usage

``` typescript
import {decodeByHex} from "@wuchuhengtools/gbk-parser"
// ...
 const rest = decodeByHex("d4c1414243303031")
console.log(rest) //粤ABC001


```
## Contributing

You can contribute in one of three ways:

1. File bug reports using the [issue tracker](https://github.com/wuchuhengtools/gbk-parser/issues).
2. Answer questions or fix bugs on the [issue tracker](https://github.com/wuchuhengtools/gbk-parser/issues).
3. Contribute new features or update the wiki.

_The code contribution process is not very formal. You just need to make sure that you follow the PSR-0, PSR-1, and PSR-2 coding guidelines. Any new code contributions must be accompanied by unit tests where applicable._

## License

MIT
