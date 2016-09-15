var webpack = require('webpack');
module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './app/index.js'],
},
output: {
  path: './public/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:9070/built/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:9070/built/',
  port: process.env.PORT || 9070
},
module: {
 loaders: [
   { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets:['stage-2', 'react', 'es2015']}},
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
 ]
},
 plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
 ]
}
