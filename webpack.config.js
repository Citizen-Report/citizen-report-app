const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        // /\.css$ /,
        test: /\.css$/i,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'client'),
    historyApiFallback: true, 
  },

  plugins: [
    new Dotenv()
  ]
}