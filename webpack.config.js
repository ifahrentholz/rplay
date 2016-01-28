var path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./App.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "player.js"
  },

  devtool: "inline-source-map",

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        include: [
          path.join(__dirname, "src")
        ],
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};