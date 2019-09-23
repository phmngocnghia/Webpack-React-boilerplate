// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
var path = require("path");
var devMode = process.env.NODE_ENV !== 'production';
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
var devMode = process.env.NODE_ENV !== 'production';
const rootDirectory = process.cwd()

module.exports = {
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
    // your custom plugins
  ],
  module: {
    rules: [
      {
        // Typescript
        test: /\.tsx?$/,
        // shortcut use[{loader}]
        loader: ["babel-loader", "eslint-loader"]
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
          }
        ]
      }, {
        // Styles
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
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
        use: ['@svgr/webpack'],
      }
    ],
  },
};
