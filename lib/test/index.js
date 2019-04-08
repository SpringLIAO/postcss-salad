'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _features = require('../features');

var _features2 = _interopRequireDefault(_features);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var featuresList = (0, _keys2.default)(_features2.default);
var options = {
  features: {}
};

// disable all features
featuresList.forEach(function (name) {
  if (!_utils2.default.exists(name)) return;
  var input = _utils2.default.readFixture(name);
  var expected = _utils2.default.readFixture(name + '.expected');

  options.features.autoprefixer = name === 'autoprefixer';

  (0, _2.default)(options).process(input).then(function (result) {
    var actual = result.css;

    _utils2.default.write(_utils2.default.fixturePath(name + '.actual'), actual);

    (0, _tape2.default)(name, function (t) {
      t.equal(actual, expected);
      t.end();
    });
  }).catch(function (e) {
    console.log(e);
  });
});