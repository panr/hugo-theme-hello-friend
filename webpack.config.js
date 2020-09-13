const Webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require("path");

const join = (...paths) => path.join(__dirname, ...paths);

module.exports = (env, { mode, watch }) => ({
  resolve: {
    extensions: [".js", ".css"],
    modules: ["assets", "node_modules"],
  },
  entry: {
    main: [join("assets", "js", "menu.js"), join("assets", "js", "theme.js")],
    prism: join("assets", "js", "prism.js"),
    style: join("assets", "css", "style.css"),
  },
  output: {
    filename: "[name].js",
    path: join("static/assets"),
    publicPath: "",
  },
  watch,
  performance: {
    hints: false,
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
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
              import: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "postcss.config.js",
              },
            },
          },
        ],
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
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [join("static/assets")],
      cleanAfterEveryBuildPatterns: [
        "!images/**/*",
        "!fonts/**/*",
        // Remove unused file for a production build.
        mode === "production" && join("static/assets/style.js"),
      ],
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});
