const path = require('path')

module.exports = {
  entry: {
    index: './src/index-2.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {}
}