# Typescript

## typescript setting

1.  typescript install

        yarn global add typescript

    또는

        npm install -g typescript

2.  tsconfig.json 파일 생성

    `typescript` 가 어떻게 `javascript` 로 컴파일 되는지 옵션을 명시한다.

    ```javascript
    {
        compilerOptions:{
            "module":"CommonJs",
            "target":"ES2015",
            "sourceMap":true
        },
        include:["index.js"],
        exclude:["node_modules"]
    }
    ```

    - `compilerOptions`

      - `module`은 JavaScript에서 범용적인 사용을 위해 모듈화를 할때 사용되는 방식을 명시하는것 인데 AMD/CommonJS가 대표적이다.
      - `tartget`은 javascript로 변환할때의 ECMA 버전이다.
      - `sourceMap`은 디버그가 가능하도록해주는 SourceMap을 생성여부이다.
      - outDir은 컴파일된 파일의 위치를 지정한다. 없으면 기본적으로 ts파일과 동일한 디렉토리에 컴파일된 파일이 생성된다.

    - `include`
      - ts 파일의 범위를 지정한다 (컴파일에 포함 될 js파일 지정). 예로 `node_modules`와 같은 디렉토리는 컴파일 할 필요가 없고 컴파일시 매우 느리게 된다.
    - `exclude`
      - `include` 의 반대다. 컴파일에 포함 되지 않을 파일 지정

    여기까지가 typesciprt의 기본 적인 세팅이다.

3.  index.ts 파일 생성

    ```javascript
    // index.ts
    alert("hello typescript");
    ```

4.  위와 같이 작성 후 루트경로의 터미널에서 아래와 같이 실행

        tsc

5.  tsconfig.json에 명시한 옵션에 맞게 컴파일이 진행된다

    - index.js && index.js.map 생성 된다

6.  run

        node index.js

## typescript basic types

1. string
2. number
3. boolean
4. arrays

   ```typescript
   let list: number[] = [1, 2, 3]; //first uses
   let list: Array<number> = [1, 2, 3]; //seconde uses
   ```

5. tuple

   ```typescript
   // Declare a tuple type
   let x: [string, number];
   // Initialize it
   x = ["hello", 10]; // OK
   // Initialize it incorrectly
   x = [10, "hello"]; // Error
   ```

6. void
7. any
8. null & undefined
9. type assertions
   typescript 와 jsx 를 같이 사용하는 경우 as 타입만 허용한다.

   ```typescript
   let someValue: any = "this is a string";
   let strLength: number = (someValue as string).length;
   ```

자세한 내용은 [여기](https://www.typescriptlang.org/docs/handbook/basic-types.html) 참조

**object types**

object 의 타입을 지정하는 방법이다.

1.  interface

    ```javascript
    interface Human {
      name: string;
      age: number;
      gender: string;
    }
    const person = {
      name: "jeong",
      age: 25,
      gender: "male"
    };
    ```

1.  class

    ```javascript
    class People {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    }

    const geonwoo = new People("jeong", 25, "male");

    ...
    ...

    ```

---

## tsc-watch

매번 tsc 를 터미널에 입력하여 index.js 파일을 생성하는건 여간 귀찮은 일이 아니기 때문에 저장 될 때마다 typescript 를 컴파일 시켜보자.

1.  install

         yarn add tsc-watch

    또는

        npm install -d tsc-watch

2.  package.json

    ```json
    "scripts": {
         "start": "tsc-watch --onSuccess \"node index.js\""
    }
    ```

3.  run

        yarn start

    또는

    npm start

---

**typescript module not found 에레 대처법**

start 했더니 에러가 발생한다... 글로벌로 설치한 tyscript 를 tsc-watch 가 찾지 못한다.

    yarn add typescript

또는

    npm install typescript

재설치 해주면 문제 해결!

---

**unexpected identifie 에러 대처법r**

`yarn start` 했더니 `interface` 첫번째 줄에서 `unexpected identifier`에러가 발생한다.

한참을 해매고 공식문서를 들여다본지 1시간째...
`package.json` 의 `script` 에서 `index.js` 가 아닌 `index.ts` 를 불러온것을 찾았다.

`index.js` 로 똑바로 고쳐주자
