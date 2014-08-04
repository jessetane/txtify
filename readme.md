# txtify
a transform that lets you `require()` text files with [browserify](https://github/substack/node-browserify)

currently the following extensions are considered text files:

* txt
* text
* html
* css
* csv
* tmpl
* tpl

## why
[brfs](https://github/substack/brfs), while pure in the sense that it only enables what would be possible in node, is a lot of typing, not very pretty, and I always forget to utf8 decode the buffer it returns!

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
    "transform": {
      "txtify"
    }
  }
}
```
or if you're using the CLI:
``` bash
browserify -t txtify app.js > build.js
```

## install
`npm install txtify`

## test
`npm test`

## notes
submit a PR with a test to add other extensions you think should be recognized.

## license
WTFPL
