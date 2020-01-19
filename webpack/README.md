# WEBPACK

## WEBPACK 기본 설정

```javascript
// webpack.config.js
var path = require("path");
var webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    //dist 폴더의 bundle.js 파일로 결과를 저장할 것이다.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
};
```

> uglifyjs-webpack-plugin 코드 난독화 방법

### `entry`

웹팩이 빌드할 파일을 알려주는 역할을 합니다.
위와 같이 한다면 `./index.js` 파일 기준으로 import 되어 있는 모든 파일들을 찾아 하나의 파일로 합친다.

### `module`

`entry` 에서 파일을 읽어 `module` 의 설정을 적용한다.

```javascript
module : {
    rules: {
        test: '가지고올 파일 정규식',
        use: [ // 생략 가능
            {
                loader: '사용할 로더 이름',
                options: { 사용할 로더 옵션 }
            }
        ]
    }
}
```

`babel-loader`는 우리가 사전에 작업한 `.babelrc`를 참고하여 사용자 브라우저에 맞는 최신 javascript 문법으로 변환해 준다. 또는 아래 처럼 `babelrc` 값을 줄 수 있다.

```javascript
options: {
  presets: ["@babel/preset-env"];
}
```

### `output`

웹팩에서 빌드를 완료하면 `output`에 명시되어 있는 정보를 통해 빌드 파일을 생성합니다.

`Result`: `entry` 에서 `module` 을 적용 후 `output` 으로 나온다.

## WEBPACK WITH REACT

```javascript
// webpack.config.js
var path = require("path");

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
      }
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
```

React 에서 사용하기 위해 WEBPACK 기본 설정 에서 몇가지 설정을 추가하였다. 추가 된 설정에 대해서 알아보자.

- `name`: `webpack` 의 이름. 없어도 무관하다.
- `mode`: `webpack4` 에는 `development` & `production` 두가지 mode 가 있다. `development` 일때는 minified(압축) 이 되지 않는다는 차이점이 있다.

```json
"scripts": {
  "dev": "webpack --mode development",
  "build": "webpack --mode production"
}
```

`webpack` 설정 값으로 줄 수 있지만 위와 같이 `scripts` 를 작성해두면 모드 변경이 수월하다.

- `loader`: `@babel/preset-env`, `@babel/preset-react` 첫번째는 최신 문법을 사용하기 위함이고, 두번째는 리액트의 jsx 문법을 사용하기 위한 바벨이다.

위와 같이 작성하면 `./src/index.js` 파일을 입력 받아 `./dist/app.js` 로 번들링 해준다

> webpack 4는 entrypoint와 output을 별도로 설정하지 않아도
> entry point는 ./src/index.js 파일로,
> output은 ./dist/main.js로 인지하고 번들링 해준다

### 번들링한 결과 실행

```javascript
//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

위와 같은 형태로 `react` 를 렌더 중일때, `index.html` 파일을 생성한다.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./dist/app.js"></script>
  </body>
</html>
```

위와 같이 `id="root"` 값을 준 후 번들링된 파일을 script 를 이용해 임포트 한 후 브라우저에서 `index.html` 파일을 열면 된다. (css 또한 마찬가지)

---

여기까지가 가장 기본적인 React webpack 세팅이다. 아직 `CRA(create-react-app)` 에 비해 상당히 불편하다. 좀 더 편하게 만들어보자.

### `html-webpack-plugin`

번들링한 `css`, `js`파일들을 `html` 파일에 직접 임포트 해야하는 번거로움을 `html-webpack-plugin` 을 사용하면 임포트를 자동화 할 수 있다.

    // npm
    npm i html-webpack-plugin --save-dev

    // yarn
    yarn add html-webpack-plugin --dev

해당 패키지 설치를 해준다.

```javascript
// webpack.config.js
output:{...},
plugins: [
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html"
  })
];
```

위의 `index.html` 에서 `script` 부분을 제거 후 `./public/` 경로에 `index.html` 을 생성하면 `./dist/index.html` 경로에 `js`, `css` 등이 추가 된 `index.html` 파일이 생긴다.

> filename 은 output 의 경로를 기본으로 한다.
