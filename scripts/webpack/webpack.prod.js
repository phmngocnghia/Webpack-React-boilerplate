const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const productionConfig = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
})


if (process.env.ANALYZE) {
  productionConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = productionConfig