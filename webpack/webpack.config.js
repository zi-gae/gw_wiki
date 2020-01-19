var path = require("path");
var HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "webpack test",
  mode: "development", // 실서비스 production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"]
  }, // entry 에서 확장자를 안쓰고 리졸브에 써두면 index.js, index.jsx 를 찾는다
  entry: {
    app: ["./src/index"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: "/node_modules",
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.html$/,
        exclude: "/node_modules",
        loader: "html-loader",
        options: {
          presets: { minimize: true }
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
