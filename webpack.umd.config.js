const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    path: path.resolve(__dirname, './dist/a/'),
    publicPath: './',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test library.type:umd'
    })
  ]
}