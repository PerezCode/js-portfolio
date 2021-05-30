const path = require("path");

module.exports = {
  entry: path.resolve("src", "index.js"),
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
    ],
  },
};
