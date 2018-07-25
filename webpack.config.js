const path = require('path')

module.exports = {
  entry: './src/app.js',
  // entry: './src/sandbox/hoc.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // js
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      // s/css: the '?' catches both types of files (needed for normalize.css):
      {
        test: /\.?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    /**
      * historyApiFallback will render the content base by default, which
      * - enables client-side routing w/ReactRouter
      */
    historyApiFallback: true
  }
}
