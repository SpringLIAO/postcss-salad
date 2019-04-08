'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  fixturePath: function fixturePath(name) {
    var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.css';

    return path.join('src/test/features', name + ext);
  },
  readFixture: function readFixture(name, ext) {
    return fs.readFileSync(this.fixturePath(name, ext), 'utf8');
  },
  exists: function exists(name, ext) {
    return fs.existsSync(this.fixturePath(name, ext));
  },
  write: function write(name, content) {
    return fs.writeFileSync(name, content);
  }
};