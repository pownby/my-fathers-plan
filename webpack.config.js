const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development';

  return {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    devtool: devMode && 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.((c|le)ss)$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: devMode ? "[path][name]__[local]" : "[hash:base64]",
                }
              }
            },
            { loader: "less-loader" }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          exclude: /node_modules/,
          type: 'asset'
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.less'],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './public/index.html', publicPath: '/' }),
      new MiniCssExtractPlugin()
    ],
    devServer: {
      historyApiFallback: true,
      hot: true
    },
  }
};