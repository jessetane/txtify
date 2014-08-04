# txtify2
a [browserify](https://github/substack/node-browserify) transform that lets you `require()` text files with these extensions:
* txt
* text
* html
* css
* csv
* tmpl
* tpl

## why
[brfs](https://github/substack/brfs), while pure in the sense that it only enables what would be possible in node, is a lot of typing, not very pretty, and I always forget to utf-8 decode the buffer it returns!

## how
app.js
``` javascript
var html = require('./index.html')
console.log(html);
```
package.json
``` json
{
  "name": "app",
  "browserify": {
    "transform": [
      "txtify2"
    ]
  }
}
```
or if you're using the CLI:
``` bash
browserify -t txtify2 app.js > build.js
```

## install
`npm install txtify2`

## test
`npm test`

## notes
submit a PR to add (or remove?) extensions.

## license
WTFPL
