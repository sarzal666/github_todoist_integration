const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
      },
      // module: {
      //   rules: [
      //     {
      //       test: /\.m?js$/,
      //       exclude: /(node_modules|bower_components)/,
      //       use: {
      //         loader: 'babel-loader',
      //         options: {
      //           presets: ['@babel/preset-env']
      //         }
      //       }
      //     }
      //   ]
      // },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
      ]
  };
  