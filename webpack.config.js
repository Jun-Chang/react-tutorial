module.exports = {
  entry: __dirname + "/src/app.js",
  output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
  },
  module: {
    loaders : [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
