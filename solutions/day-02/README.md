## Getting Started React
1. 선행기술
    1. HTML
    2. CSS
    3. JavaScript

2. What is React?
    1. 페이스북에 의해 만들어진 재사용 가능한 UI를 다루는 자바스크립트 라이브러리이다.
    2. 가상DOM을 이용하여 DOM을 다룬다.

3. Why React?
    1. 빠르다.
    2. 모듈을 활용한 개발
    3. 확장성이 좋다.
    4. 커뮤니티가 크고 인기가 많다.
    5. 오픈소스들이 많다.
    6. 취업할 기회가 많다.

4. JSX
    1. JSX란?  
        html을 자바스크립트 코드로 쓸 수 있게 해주는 xml이다.  
        리액트에선 createElement대신 JSX를 사용한다. babel을 통해 변환된다.  
        * 예시 코드
        ```javascript
        // JSX syntax
        //we don't need to use quotes with JSX

        const jsxElement = <h1>I am a JSX element</h1>
        const welcome = <h1>Welcome to 30 Days of React Challenge</h1>
        const data = <small>Oct 2, 2020</small>
        ```
    2. JSX 구성요소
        JSX는 HTML 태그 하나나 두개(부모 태그)로 이루어진다.  
        * 예시 코드(하나의 태그)
        ```javascript
        const jsxElement = <h1>I am a JSX element</h1> // JS with HTML
        ```  
        * 예시 코드(여러개의 태그)
        ```javascript
            const header = (
            <header>
                <h1>Welcome to 30 Days Of React</h1>
                <h2>Getting Started React</h2>
                <h3>JavaScript Library</h3>
            </header>
            )
        ```  

        ```javascript
            const header = (
            <header>
                <h1>Welcome to 30 Days Of React</h1>
                <h2>Getting Started React</h2>
                <h3>JavaScript Library</h3>
                <p>Asabeneh Yetayeh</p>
                <small>Oct 2, 2020</small>
            </header>
            )
        ```  
    3. 주석이 가능하다.
    ```javascript
        {
        /*
        <header>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 2, 2020</small>
        </header>
        */
        }
    ```  
    4. JSX 랜더링하기
    * 예시 코드
    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>30 Days Of React Challenge</title>
        </head>

        <body>
            <div class="root"></div>
            <script
            crossorigin
            src="https://unpkg.com/react@16/umd/react.development.js"
            ></script>

            <script
            crossorigin
            src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
            ></script>

            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            <script type="text/babel">
            // To get the root element from the HTML document
            const rootElement = document.querySelector('.root')
            // JSX element
            const jsxElement = <h1>I am a JSX element</h1>
            // we render the JSX element using the ReactDOM package
            // ReactDOM has the render method and the render method takes two arguments
            ReactDOM.render(jsxElement, rootElement)
            </script>
        </body>
    </html>
    ```
5. CSS
    1. 인라인 css
    2. JSX 객체
    3. 스타일 태그