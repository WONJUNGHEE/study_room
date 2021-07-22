const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const PORT = process.env.PORT || 3000;
module.exports = {
  entry: { app: "./src/index.tsx" },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
  devServer: {
    contentBase: path.resolve("./build"),
    index: "index.html",
    port: PORT,
    historyApiFallback: true,
  },
  mode: "development",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
        styles: {
          name: "styles",
          test: /\.(css)$/,
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.()$/, // font등의 파일 확장자 regExp
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "./dist",
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.()$/, // 이미지 확장자 regExp
        exclude: /node_modules/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]?[hash]", // 파일명 또는 파일해쉬값
            publicPath: "./dist/", // 빌드 후 limit가 넘는 파일 위치
            limit: 10000, // 10000byte 제한
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new miniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].[id].css",
    }),
  ],
};
