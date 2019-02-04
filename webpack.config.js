const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const autoprefixer = require('autoprefixer');

const path = require("path");
const join = (...paths) => path.join(__dirname, ...paths);
const isDevelopment = process.env.NODE_ENV !== "production";


module.exports = {
  resolve: {
    extensions: [".js", ".scss"],
    modules: ["source", "node_modules"],
  },
  entry: {
    "main.js": [
      join("source", "js", "prism.js"),
      join("source", "js", "app.js"),
      join("source", "js", "menu.js"),
      join("source", "js", "theme.js"),
    ],
    "style.css": join("source", "scss", "style.scss")
  },
  output: {
    filename: "[name]",
    path: join("static/assets"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|woff|woff2|ttf|eot|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true,
                sourceMap: isDevelopment
              },
            },
            {
              loader: "postcss-loader",
              options: {
                autoprefixer: {
                  browsers: ["last 2 versions"]
                },
                plugins: () => [
                  autoprefixer
                ]
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        }),
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      minChunks: 2,
    },
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
      }),
    ],
  },
  plugins: [
    new CleanPlugin(join("static/assets")),
    new ExtractTextPlugin("[name]"),
  ],
};
