var thru = require('through2').obj;
var quote = require('quote-stream');
var combine = require('stream-combiner2');

module.exports = txtify;

function txtify(file, opts) {
  var extensions = [];
  var optional = opts.extensions || opts.e;
  for (var i in optional) extensions.push(optional[i]);
  var matcher = new RegExp('\.(' + extensions.join('|') + ')$');
  if (matcher.test(file)) {
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
