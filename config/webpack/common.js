// shared config (dev and prod)
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.tsx",
  context: path.resolve(__dirname, "../../src"),

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      component: path.resolve(__dirname, "../../src/components/"),
      assets: path.resolve(__dirname, "../../src/assets/"),
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
      // {
      //   test: /\.(jpe?g|png|gif|svg|otf)$/i,
      //   type: "asset/resource",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../../public", "index.html"),
      base: "/mortezaahmadi/",
      inject: "head",
      chunksSortMode: "auto",
      clean: true,
      attributes: {
        crossorigin: "anonymous",
      },
    }),
  ],
};
