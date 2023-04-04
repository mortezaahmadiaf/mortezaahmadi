// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",

  devServer: {
    open: true, // open browser
    hot: true, // enable HMR on the server
    historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "assets/images/[name]-[hash][ext]",
      //     publicPath: "/",
      //   },
      // },
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
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshPlugin()],
});
