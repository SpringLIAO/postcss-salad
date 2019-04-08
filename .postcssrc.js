// https://github.com/michael-ciniawsky/postcss-load-config
var path = require('path')
var webpack = require('webpack')

module.exports = {
  // "plugins": {
  //   "postcss-import": {},
  //   "postcss-url": {},
  //   // to edit target browsers: use "browserslist" field in package.json
  //   "autoprefixer": {}
  // }
  "plugins" : [
  	require('postcss-import')(),
  	require('postcss-url')(),
  	require(path.join(__dirname, 'lib/index'))({
      partialImport: {
        addDependencyTo: webpack
      }
    })
  ]
}
