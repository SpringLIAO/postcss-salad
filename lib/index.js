'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _caniuseApi = require('caniuse-api');

var _features = require('./features');

var _features2 = _interopRequireDefault(_features);

var _featuresActivationMap = require('./features-activation-map');

var _featuresActivationMap2 = _interopRequireDefault(_featuresActivationMap);

var _warnForDuplicates = require('./warn-for-duplicates');

var _warnForDuplicates2 = _interopRequireDefault(_warnForDuplicates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin = _postcss2.default.plugin('postcss-salad', function (options) {
  options = (0, _extends3.default)({
    console: console,
    warnForDuplicates: true,
    features: {}
  }, options);

  var features = options.features;

  // copy browsers option to plugins that supports it
  var pluginsToPropagateBrowserOption = ['autoprefixer', 'rem'];

  pluginsToPropagateBrowserOption.forEach(function (name) {
    var feature = features[name];

    if (feature !== false) {
      features[name] = (0, _extends3.default)({
        browsers: feature && feature.browsers ? feature.browsers : options.browsers
      }, feature || {});
    }
  });

  if (features.autoprefixer && features.autoprefixer.browsers === undefined) {
    delete features.autoprefixer.browsers;
  }

  var processor = (0, _postcss2.default)();

  // features
  (0, _keys2.default)(_features2.default).forEach(function (key) {
    // feature is auto enabled if: not disable && (enabled || no data yet ||
    // !supported yet)
    if (
    // feature is not disabled
    features[key] !== false && (
    // feature is enabled
    features[key] === true ||

    // feature don't have any browsers data (yet)
    _featuresActivationMap2.default[key] === undefined ||

    // feature is not yet supported by the browsers scope
    _featuresActivationMap2.default[key] && _featuresActivationMap2.default[key][0] && !(0, _caniuseApi.isSupported)(_featuresActivationMap2.default[key][0], options.browsers))) {
      var _plugin = _features2.default[key]((0, _typeof3.default)(features[key]) === 'object' ? (0, _extends3.default)({}, features[key]) : undefined);
      processor.use(_plugin);
    }
  });

  if (options.warnForDuplicates) {
    processor.use((0, _warnForDuplicates2.default)({
      keys: (0, _keys2.default)(_features2.default),
      console: options.console
    }));
  }

  return processor;
});

plugin.features = _features2.default;

module.exports = plugin;