var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: __dirname + '/src/',
    filename: 'bundle.js',
    publicPath: '/src/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()//,
    // new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        // loaders: ['react-hot', 'jsx?insertPragma=React.DOM&harmony'], 
        loaders: ['react-hot', 'jsx'], 
        exclude: /node_modules/ 
      }
    ]
  }
};