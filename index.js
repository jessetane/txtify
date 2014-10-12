var thru = require('through2').obj;
var quote = require('quote-stream');
var combine = require('stream-combiner2');

var extensions = [
  'txt',
  'text',
  'html',
  'css',
  'csv',
  'tmpl',
  'tpl'
];

var regex = new RegExp('\.(' + extensions.join('|') + ')$');

module.exports = txtify;

function txtify(file) {
  if (regex.test(file)) {
    var first = true;
    return combine(
      quote(),
      thru(function(c, enc, cb) {
        if (first) {
          this.push('module.exports = ');
          first = false;
        }
        cb(null, c);
      }, function(cb) {
        this.push(';');
        cb();
      })
    )
  }
  else {
    return thru();
  }
}
