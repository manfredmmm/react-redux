const validate = require('webpack-validator');

module.exports = (env) => {
  return validate({
    entry: './src/entry.ts',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
      publicPath: '/assets/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts']
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'] },
        { test: /\.ts$/, exclude: /node_modules/, loaders: ['awesome-typescript-loader'] }
      ]
    }
  });
};
