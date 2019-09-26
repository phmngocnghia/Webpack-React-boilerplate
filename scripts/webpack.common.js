var path = require("path");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index"),
  output: {
    path: path.resolve(process.cwd(), "./public/"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        // Typescript
        test: /\.tsx?$/,
        // shortcut use[{loader}]
        loader: "babel-loader"
      },
      {
        // image
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // file name format
              name: "[name].[hash].[ext]",
              outputPath: "./assets"
            }
          }
        ]
      }
    ]
  },
  /**
   * Webpack resolve
   * index.js, index.ts
   * resolve order: 1 -: n-1
   */

  resolve: {
    // since our webpack config store not in the same folde as node module
    modules: [path.resolve(__dirname, "../node_modules")],

    // import without filename
    extensions: [".js", ".ts", ".tsx"],

    // auto resolve config from typescript
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json")
      })
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, "../tsconfig.json")
    }),
    new HtmlWebpackPlugin({
      // template inject assset to
      template: path.resolve(__dirname, "../src/assets/index.html")
    })
  ]
};
