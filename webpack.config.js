module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    { test: /\.css$/, loader: "style-loader!css-loader" }
  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port:"8001",
    proxy: {
      "/api": "http://localhost:3050"
    }
  },
  devtool: 'inline-source-map',
};
