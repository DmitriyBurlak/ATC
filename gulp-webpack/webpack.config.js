module.exports = {
  mode: "development",
  output: {
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
