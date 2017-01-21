const validate = require('webpack-validator');

module.exports = (env) => {
  return validate({
    entry: './src/entry.js',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
      publicPath: '/assets/',
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
      ]
    }
  });
};
