var fs = require('fs');
var vm = require('vm');
var tape = require('tape');
var browserify = require('browserify');
var txtify = require('../');

var extensions = [
  'txt',
  'text',
  'html',
  'css',
  'csv',
  'tmpl',
  'tpl',
];

tape('extensions', function(t) {
  t.plan(extensions.length);

  for (var i in extensions) (function(extension) {
    var file = fs.readFileSync(__dirname + '/fixtures/' + extension + '/index.' + extension, 'utf8');
    var b = browserify(__dirname + '/fixtures/' + extension + '/index.js');
    b.transform(txtify, { extensions: extensions });
    b.bundle(function(err, src) {
      if (err) t.fail(err);
      
      vm.runInNewContext(src, { console: { log: log }});
      function log(msg) {
        t.equal(msg, file);
      }
    });
  })(extensions[i]);
});
