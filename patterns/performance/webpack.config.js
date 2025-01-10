const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      // babel-loader converts code written in modern js to plain js code supported by browsers
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"] 
        }}}
    ]
  },
  optimization: {
    // to apply tree-shaking - reduce bundle size by eliminating dead code like exported but unimported method
    usedExports: false,
    // to minimize - using TerserPlugin - reduce javascript file size. eg. removing comments, whitespace...
    minimize: false,
    minimizer: [new TerserPlugin()],
  },
  // to analyze the bundle size
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};