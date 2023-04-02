// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const commonConfig = require("./common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sass = require("sass");
const hosting = require("../hosting.json");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",

  output: {
    filename: "js/bundle.js",
    path: resolve(__dirname, `../../${hosting.outDir}`),
    // publicPath: "/mortezaahmadi/",
    path: resolve(__dirname, "../../docs"),
    publicPath: "/docs/",
    // publicPath: "/",
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
              publicPath: resolve(__dirname, "docs/css"),
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
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name]-[hash][ext]",
          publicPath: `/${hosting.name}/`,
        },
      },
      {
        test: /\.(otf|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name]-[hash][ext]",
          publicPath: "/",
        },
      },
    ],
  },
  devtool: "source-map",
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
  },
  optimization: {
    runtimeChunk: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        // sourceMap: true, // Enable source maps. Please note that this will slow down the build
        terserOptions: {
          ecma: 6,
          toplevel: true,
          module: true,
          compress: {
            warnings: false,
            ecma: 6,
            module: true,
            toplevel: true,
          },
          output: {
            comments: false,
            beautify: false,
            indent_level: 2,
            ecma: 6,
          },
          mangle: {
            keep_fnames: true,
            module: true,
            toplevel: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[hash].css",
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "assets", to: "assets" }],
    // }),
  ],
});
