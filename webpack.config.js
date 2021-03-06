var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var homeDir = process.cwd();

const extractSass = new ExtractTextPlugin({
    filename: "[name]/index.[hash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  resolve: {
    alias: {
      'src': path.join(homeDir, 'src')
    }
  },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]/index.[hash].js',
    chunkFilename: '[name]/index.[hash].js'
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.ejs',
      inject: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]-[local]-[hash:base64:5]'
              }
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.js$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-env', '@babel/preset-stage-0', '@babel/react']
        }
      },
      {
        test: /\.(html|ejs)$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8081,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false
    }
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  devtool: "source-map"
};