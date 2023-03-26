// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const commonConfig = require("./common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sass = require("sass");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/bundle.js",
    path: resolve(__dirname, "../../"),
    publicPath: "./",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.s?css$/,
        loader: "stripcomment-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: resolve(__dirname, "/css"),
            },
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: { implementation: sass },
          },
        ],
      },
      {
        test: /\.jpe?g|png$/,
        exclude: /node_modules/,
        use: ["url-loader", "file-loader"],
      },
    ],
  },
  devtool: "source-map",
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[hash].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "assets", to: "assets" }],
    }),
  ],
});
