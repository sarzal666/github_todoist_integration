const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
      ]
  };
  