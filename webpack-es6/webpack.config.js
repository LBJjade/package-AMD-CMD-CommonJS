/*
 * @Author: your name
 * @Date: 2019-11-28 21:11:51
 * @LastEditTime: 2019-11-29 10:48:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \package-AMD-CMD-CommonJS\webpack-es6\webpack.config.js
 */
var path = require('path');
module.exports = {
  entry: "./js/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}