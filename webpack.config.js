const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PROJECT_ROOT = path.resolve(__dirname);
const PUBLIC_INDEX = path.resolve(PROJECT_ROOT, "public", "index.html");
const SRC_PATH = path.resolve(__dirname, "src");
const BUILD_PATH = path.resolve(PROJECT_ROOT, "build");

module.exports = () => {
  const mode = "development";
  const isEnvDevelopment = mode === "development";
  const isEnvProduction = mode === "production";
  return {
    mode,
    entry: path.resolve(SRC_PATH, "index.tsx"),
    output: {
      path: path.resolve(PROJECT_ROOT, "build"),
      filename: isEnvDevelopment
        ? "js/[name].[contenthash:8].js"
        : "js/bundle.js",
    },

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
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: PUBLIC_INDEX }), // 빌드한 결과물을 HTML 파일로 생성해주는 Plugin
      new Dotenv(), // .env에 있는 변수를 가져오는 Plugin
      new CleanWebpackPlugin(), // 성공적으로 다시 빌드 한 후 webpack의 output.path에있는 모든 빌드 폴더를 제거 및 정리
      new MiniCssExtractPlugin(), // 별도로 css 파일을 만들어서 빌드하는 Plugin
    ],
    cache: {
      type: isEnvDevelopment ? "memory" : "filesystem",
    },
    devServer: {
      port: 3000, // port 설정
      host: "localhost", // host 설정
      open: true, // 서버를 실행했을 때, 브라우저를 열어주는 여부
      overlay: true, // 오류 발생 시, 브라우저에 전체 화면 오버레이를 표시
      stats: "errors-warnings", // 컴파일 시 보여주는 항목 설정
      contentBase: path.join(__dirname, "/"),
      compress: true,
      watchContentBase: true,
      watchOptions: {
        poll: true,
      },
      historyApiFallback: true,
    },
  };
};
