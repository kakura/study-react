// webpack.config.js
module.exports = {
  entry: {
    app: './src',
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