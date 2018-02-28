// webpack.config.js
module.exports = {
  devtool: "cheap-module-source-map",
  entry: {
    greet: './src/greet.jsx',
  },

  output: {
    path: __dirname + '/../app/assets/javascripts/webpack/',
    filename: '[name].js',
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  },
}