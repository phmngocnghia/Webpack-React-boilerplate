var path = require("path");
var devMode = process.env.NODE_ENV !== 'production';
var Dotenv = require('dotenv-webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
var devMode = process.env.NODE_ENV !== 'production';
const rootDirectory = process.cwd()

const configs = {
  mode: "development",
  entry: path.resolve(rootDirectory, "./src/index.tsx"),
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
        // loader: ["babel-loader",  "eslint-loader"]
        use: [
          'babel-loader',
          {
            loader: 'linaria/loader',
            options: {
              sourceMap: devMode,
            },
          },
        ]
      },
      {
        // image
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'lqip-loader',
            options: {
              path: '/media', // your image going to be in media folder in the output dir
              name: '[name].[ext]', // you can use [hash].[ext] too if you wish,
              base64: true, // default: true, gives the base64 encoded image
              palette: true // default: false, gives the dominant colours palette
            }
          }, {
            loader: "file-loader",
            options: {
              // file name format
              name: "[name].[hash].[ext]",
              outputPath: "./assets"
            }
          }, {
            loader: 'image-webpack-loader',
            options: {
              disable: devMode, // webpack@2.x and newer
            },
          },
        ]
      }, {
        // Styles
        test: /\.css$/i,
        use: [
          devMode ? { loader: 'style-loader' } : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          { loader: 'postcss-loader' }
        ],
      }, {
        // Svg
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /url/,
            loader: 'url-loader'
          }, {
            loader: '@svgr/webpack',
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
    alias: {
      // 'react-dom': '@hot-loader/react-dom',
    },
    // since our webpack config store not in the same folde as node module
    modules: [path.resolve(rootDirectory, './node_modules')],

    // import without filename
    extensions: ['.js', '.ts', '.tsx'],

    // auto resolve config from typescript
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(rootDirectory, './tsconfig.json')
      }),
    ]
  },
  plugins: [
    new Dotenv({
      path: "./.env"
    }),
    new HtmlWebpackPlugin({
      // template inject assset to
      template: path.resolve(rootDirectory, "./src/assets/index.html")
    }),
  ],
  node: {
    fs: 'empty'
  }
};

// errors prevent HMR from working properly
if (!devMode) {
  configs.module.rules[0].use.push('eslint-loader')
  configs.plugins.unshift(new ForkTsCheckerWebpackPlugin({
    tsconfig: path.resolve(rootDirectory, './tsconfig.json')
  }))
}

module.exports = configs