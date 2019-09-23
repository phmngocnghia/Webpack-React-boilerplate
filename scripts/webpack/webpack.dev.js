const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const developmentConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-source-map'
})


module.exports = developmentConfig