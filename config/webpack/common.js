// shared config (dev and prod)
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  context: resolve(__dirname, "../../src"),
  entry: "./index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      config: path.resolve(__dirname, "../../config"),
      app: path.resolve(__dirname, "../../src/"),
    },
  },

  module: {
    rules: [
      {
        test: [/\.(js|jsx)?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Morteza Ahmadi",
      template: path.join(__dirname, "../../public", "index.html"),
      base: ".",
      inject: "head",
      chunksSortMode: "auto",
      attributes: {
        // crossorigin: "anonymous",
      },
    }),
  ],
};
