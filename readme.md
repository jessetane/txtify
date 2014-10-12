# txtify2
A [browserify](https://github/substack/node-browserify) transform that lets you `require()` text files.

## Why
[brfs](https://github.com/substack/brfs) is great for when you need to write javascript that will work both in node and the browser. If you're targeting only the browser though, brfs tends to be a lot of typing and personally I always forget to utf-8 decode the buffer it returns!

## How
Require some text files in your browser app:
``` javascript
var html = require('./index.html');
console.log(html);
```
then build it using the browserify CLI:
``` bash
browserify -t [ txtify2 -e html ] client.js > build.js
```
or via the API:
``` javascript
var b = browserify(__dirname + '/client.js');
b.transform('txtify2', { extensions: [ 'html' ] });
b.bundle(function(err, src) { console.log(src) });
```
or via package.json:
``` json
{
  "name": "client",
  "browserify": {
    "transform": [
      [ "txtify2", { "extensions": [ "html" ] } ]
    ]
  }
}
```

## Install
`npm install txtify2`

## Test
`node test`

## Releases
The latest stable release is published to [npm](http://npmjs.org/txtify2). Abbreviated changelog below:
* [2.x](https://github.com/jessetane/txtify2/archive/2.0.0.tar.gz)
  * Extensions are no longer hardcoded, specify them as transform options instead
* [1.x](https://github.com/jessetane/txtify2/archive/1.0.2.tar.gz)
  * First pass

## License
Copyright © 2014 Jesse Tane <jesse.tane@gmail.com>

This work is free. You can redistribute it and/or modify it under the
terms of the [WTFPL](http://www.wtfpl.net/txt/copying).

No Warranty. The Software is provided "as is" without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement.
