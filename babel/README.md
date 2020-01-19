# Javascript babel 적용

## 1. install

    npm install --save-dev @babel/core @babel/cli @babel/preset-env

> @babel/preset-env 최신바벨 중에서 가장 검증된 최산바벨?

## 2. .babelrc

```javascript
// .babelrc
{
 "presets": ["@babel/preset-env"] // 사용할 바벨 문법 패키지
}
```

## 3. Run babel

```javascript
babel-node index.js // node index.js 를 대체
```

라고 치기 귀찮으니까 script 를 작성해주자.

## 4. package.json

```json
//package.json
"scripts": {
    "start": "babel-node index.js"
 }
```

## 5. Run babel

```
npm start
```

아래 에러가 발생한다..

```
Error: Cannot find module '@babel/core'
```

찾을 수 없다고 하니까 설치해보자

```
npm install @babel/core
```

정상 적으로 잘 실행된다. 이제 es6 이상의 문법 사용이 가능하다
