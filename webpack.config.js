module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/assets'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'jsx'],
        exclude: /node_modules/
      }
    ]
  }
};