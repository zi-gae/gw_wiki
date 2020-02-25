# Typescript

## 특징

1. `typescript` 는 현재 es3 부터 es10 문법까지 지원

   - 따로 babel-loader 가 필요 없음
   - 대신 웹팩과 타스를 이어줄 loader 가 필요
   - 대표적으로 `ts-loader` or `awesome-typescript-loader` 가 있다.
   - [두개 차이점](https://github.com/s-panferov/awesome-typescript-loader)

2. npm 유형

   1. typescript 를 지원
   2. index.dts 지원
   3. react, react-dom... 등 유명한 패키지들은 [커뮤니티](https://github.com/DefinitelyTyped/DefinitelyTyped)에 서 만들어둔게 있음
      1. 커뮤니티에서 만든 버전과 공식버전이 같은지 확인.
         > 첫번째 버전이 맞으면 얼추 맞긴함

## react typescript

1. install typescript

   ```
   npm i -D awesome-typescript-loader
   ```

2. setting webpack

   ```javascript
   module.exports = {
     mode: "development",
     resolve: {
       extensions: [".jsx", ".js", ".tsx", ".ts"]
     },

     entry: {
       app: "./src/index"
     },
     module: {
       rules: [
         {
           test: /\.tsx?$/,
           loader: "awesome-typescript-loader"
         }
       ]
     },
     output: {
       filename: "bundle.js",
       path: path.join(__dirname, "dist")
     }
   };
   ```

   기본적인 타입스크립트 웹팩 설정이다.
   `awesome-typescript-loader` 를 추가해주고 `resolve` 에 `.ts` , `.tsx` 를 추가해준다.

3. install react, react-dom

   ```
   npm i @types/react @types/react-dom
   ```

   위 유형 2번에 해당 된다.

4. init typescript

   ```
   tsc -init
   ```

   프로젝트 폴더에서 실행

5. start typescript

   ```
   tsc --init
   ```

   프로젝트 폴더에서 실행

6. setting typescript options

   ```json
   {
     "compilerOptions": {
       "strict": true,
       "lib": [
         "DOM",
         "ES5",
         "ES2015",
         "ES2016",
         "ES2017",
         "ES2018",
         "ES2019",
         "ES2020"
       ],
       "module": "commonjs",
       "jsx": "react"
     },
     "exclude": ["node_modules", "dist"]
   }
   ```

   `typescript` 는 자체적으로 `es2020` 을 지원하며 별도의 바벨을 필요로 하지 않는다. 위와 같이 `es2020` 까지 적거나 사용하는 문법까지만 적어놔도 된다. `react` 에서 사용하기 위해서는 `"jsx": "react"` 를 꼭 적어주자.
   `module` 은 default 가 `commonjs` 이다.

##  typescript on react.js 

1. 사용하는 로더가 있다면 로더에 `.ts`, `.tsx` 를 추가

  > * NOTE: `interfcae` & `types` 를 사용 할때 콤마 또는 세미콜론으로 구분자를 필수적으로 사용해야 한다.

### useRef
타입스크립트 환경에서 useRef 를 통해 어떤 변수 값을 관리하고 싶을 땐 다음과 같은 코드를 작성

*변수 값 관리하기*

  ```javascript
  const id = useRef<number>(0);
  const increaseId = () => {
    id.current += 1;
  }
  ```

`useRef` 를 쓸땐 위와 같은 코드처럼 `Generic` 을 통해 `~.current` 의 값을 추론 할 수 있다.

*돔 관리하기*
ref 안에 DOM 을 담을 때도 마찬가지입니다. 
> 단, 초깃값은 null 로 설정



### TS on Redux

1. redux action deceleration

type을 선언 할 때에는 다음과 같이 문자열 뒤에 `as const` 라는 키워드를 붙여준다.
`as const`는 `const assertions`라는 `TS` 문법이다. 
이 문법을 사용하면 우리가 추후 액션 생성함수를 통해 액션 객체를 만들게 됐을 때 type의 `TS` 타입이 string이 되지 않고 실제값을 가르키게 된다.



