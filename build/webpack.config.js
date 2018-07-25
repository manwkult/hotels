const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = (env) => {
  const plugins = [
    new ExtractTextPlugin("css/[name].[hash].css")
  ]

  if (env.NODE_ENV === 'production') {
    plugins.push(
      new CleanWebpackPlugin(['dist'], { root: resolve('dist') })
    )
  }

  return {
    entry: {
      "home": resolve('src/entries/home.js'),
    },
    output: {
      path: resolve('dist'),
      filename: '[name].[hash].js',
      publicPath: resolve('dist') + "/",
      chunkFilename: '[id].[chunkhash].js',
    },
    devServer: {
      port: 8000,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2'],
            }
          },
        },
        {
          test   : /\.css$/,
          loaders: ['style-loader', 'css-loader', 'resolve-url-loader']
        }, {
          test   : /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: '[name].[hash].[ext]'
            }
          }
        },
        {
          test: /\.(woff|woff2?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:7].[ext]'
            }
          }
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
          {
            from:'src/assets',
            to:'assets'
          } 
      ]), 
    ]
  }
}