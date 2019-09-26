const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const productionConfig = merge(commonConfig, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new FaviconsWebpackPlugin('src/assets/favicon.png')
  ],
})

if (process.env.ANALYZE) {
  productionConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = productionConfig