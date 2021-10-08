const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    a: {
      import: './src/module/test/a.js',
      library: {
        name: 'ALibrary',
        type: 'umd',
        umdNamedDefine: true
      }
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  }
}