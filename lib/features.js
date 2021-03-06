'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /**
   * REMINDER:
   * ******************
   * order is important
   * ******************
   */

  // https://npmjs.com/package/postcss-partial-import
  partialImport: function partialImport(options) {
    return require('postcss-partial-import')(options);
  },

  // https://npmjs.com/package/postcss-url
  url: function url(options) {
    return require('postcss-url')(options);
  },

  // https://npmjs.com/package/saladcss-bem
  bem: function bem(options) {
    return require('saladcss-bem')(options);
  },

  // https://npmjs.com/package/precss
  precss: function precss(options) {
    return require('precss')(options);
  },

  // postcss-color-function
  color: function color(options) {
    return require('postcss-color-function')(options);
  },

  // postcss-sass-color-functions
  sassColor: function sassColor(options) {
    return require('postcss-sass-color-functions')(options);
  },

  // https://npmjs.com/package/postcss-css-reset
  reset: function reset(options) {
    return require('postcss-css-reset')(options);
  },

  // https://npmjs.com/package/postcss-utils
  utils: function utils(options) {
    return require('postcss-utils')(options);
  },

  // https://npmjs.com/package/postcss-calc
  calc: function calc(options) {
    return require('postcss-calc')(options);
  },

  // https://npmjs.com/package/postcss-initial
  initial: function initial(options) {
    return require('postcss-initial')(options);
  },

  // https://npmjs.com/package/postcss-inline-svg
  inlineSvg: function inlineSvg(options) {
    return require('postcss-inline-svg')(options);
  },

  // https://npmjs.com/package/postcss-short
  short: function short(options) {
    return require('postcss-short')(options);
  },

  // https://npmjs.com/package/postcss-shape
  shape: function shape(options) {
    return require('postcss-shape')(options);
  },

  // https://npmjs.com/package/pixrem
  rem: function rem(options) {
    return require('pixrem')(options);
  },

  // https://npmjs.com/package/autoprefixer
  autoprefixer: function autoprefixer(options) {
    return require('autoprefixer')(options);
  },

  // https://npmjs.com/package/postcss-neat
  neat: function neat(options) {
    return require('postcss-neat')(options);
  }
};