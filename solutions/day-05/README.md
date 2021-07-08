## Props
* 함수형 컴포넌트의 Props
    * 데이터를 전달하는데에 이용됨


* Props?
    * 리액트의 키워드로 속성을 나타낸다.
    * 컴포넌트에서 다른 컴포넌트로 데이터를 전달하는데 사용된다.
    * 동적데이터를 활용할 수 있다.
    - 예시코드
    ```javascript
        // function syntax

        const getUserInfo = (firstName, lastName, country) => {
        return `${firstName} ${lastName}. Lives in ${country}.`
        }

        // calling a functons

        getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

        //component syntax

        // User component, component should start with an uppercase
        const User = (props) => {
        return (
            <div>
            <h1>
                {props.firstName}
                {props.lastName}
            </h1>
            <small>{props.country}</small>
            </div>
        )
        }
        // calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
        <User firstName = 'Asabeneh', lastName='Yetayeh' country = 'Finland' />
    ```

* Props 객체
    * 컴포넌트를 인스턴스화 할 때 속성을 전달하지 않으면 비어있다.
    - 예시코드(props가 빈 객체이다.)
    ```javascript
        import React from 'react'
        import ReactDOM from 'react-dom'

        // Header Component
        const Header = (props) => {
        console.log(props) // empty object, {}
        return (
            <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                {author.firstName} {author.lastName}
                </p>
                <small>{date}</small>
            </div>
            </header>
        )
        }

        // The App, or the parent or the container component
        // Functional Component
        const App = () => {
        return (
            <div className='app'>
            <Header />
            </div>
        )
        }

        const rootElement = document.getElementById('root')

        ReactDOM.render(<App />, rootElement)
    ```
    * 객체를 인스턴스화 할 때 알맞은 값을 전달해주어야 한다.
    - 예시코드(전달 해줌)
    ```javascript
        import React from 'react'
        import ReactDOM from 'react-dom'

        // Header Component
        const Header = (props) => {
        console.log(props) // {welcome:'Welcome to 30 Days Of React'}
        return (
            <header>
            <div className='header-wrapper'>
                <h1>{props.welcome}</h1>
            </div>
            </header>
        )
        }

        // The App, or the parent or the container component
        // Functional Component
        const App = () => {
        return (
            <div className='app'>
            <Header welcome='Welcome to 30 Days Of React' />
            </div>
        )
        }

        const rootElement = document.getElementById('root')

        ReactDOM.render(<App />, rootElement)
    ```
    * 여러 데이터타입의 props를 가질 수 있다.
    - 코드 생략


* defaultProps
    - defaultProps는 컴포넌트 내부에 기본적으로 존재하는 prop이다.

* propTypes
    - props의 데이터 타입을 설정할 수 있는 패키지이다.
    
