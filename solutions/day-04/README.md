## 리액트에서의 컴포넌트
* 작고 재사용이 가능한 코드이다.
* UI의 한 부분을 담당한다.
* 리액트 Application의 부품(?)이다.

## 컴포넌트의 종류
* 함수형 컴포넌트
* 프레젠테이션 컴포넌트
* 상태가 없는 컴포넌트
* Dumb 컴포넌트(상태 없는 프레젠테이션 컴포넌트)

## 자바스크립트 함수
* 일반 함수와 화살표 함수가 있다. 이는 약간의 차이가 있다.
    ```javascript
        const getUserInfo = (firstName, lastName, country, title, skills) => {
        return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join(
            ' '
        )} `
        }
        // When we call this function we need parameters
        const skills = ['HTML', 'CSS', 'JS', 'React']
        console.log(
        getUserInfo('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer', skills)
        )
    ```
## 자바스크립트 클래스
* 클래스는 인스턴스를 가질 수 있고 상속이 가능한 객체이다.
    ```javascript
        class Parent {
            constructor(firstName, lastName, country, title) {
            // we bind the params with this class object using this keyword
            this.firstName = firstName
            this.lastName = lastName
            this.country = country
            this.title = title
        }
        getPersonInfo() {
            return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country} `
        }
        parentMethod() {
            // code goes here
        }
        }

        const p1 = new Parent('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer')

        class Child extends Parent {
            constructor(firstName, lastName, country, title, skills) {
            super(firstName, lastName, country, title)
            this.skills = skills
            // we bind the child params with the this keyword to this child object
        }
        getSkills() {
            let len = this.skills.length
            return len > 0 ? this.skills.join(' ') : 'No skills found'
        }
        childMethod() {
            // code goes here
        }
        }

        const skills = ['HTML', 'CSS', 'JS', 'React']

        const child = new Child(
        'Asabeneh',
        'Yetayeh',
        'Finland',
        'FullStack Developer',
        skills
        )
    ```
## 함수형 컴포넌트 만들기
* 자바스크립트 함수를 사용하여 함수형 컴포넌트를 만들 수 있다.
    ```javascript
        const jsx=<tag> Content</tag>
        const ComponentName=()=>{
            return jsx;
        }
    ```
    ```javascript
        // JSX element, header
        const header = (
        <header style={headerStyles}>
            <div className='header-wrapper'>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 3, 2020</small>
            </div>
        </header>
        )

        // React Component
        const Header = () => {
        return header
        }

        // or we can just return the JSX

        const Header = () => {
        return (
            <header style={headerStyles}>
            <div className='header-wrapper'>
                <h1>Welcome to 30 Days Of React</h1>
                <h2>Getting Started React</h2>
                <h3>JavaScript Library</h3>
                <p>Asabeneh Yetayeh</p>
                <small>Oct 3, 2020</small>
            </div>
            </header>
        )
        }

        // Even th above code can be written like this
        // Explicitly returning the JSX
        const Header = () => (
        <header style={headerStyles}>
            <div className='header-wrapper'>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 3, 2020</small>
            </div>
        </header>
        )
    ```
## 랜더링 컴포넌트
* JSX element를 호출할 떄는 소괄호를 사용하고 호출할 때는 다음과 같이 호출한다.
* 전달할 요소가 있을 경우 <ComponentName propsName={'data-type'}>)과 같이 호출한다.
    ```javascript
        // index.js
        import React from 'react'
        import ReactDOM from 'react-dom'

        // Header Component
        const Header = () => (
        <header>
            <div className='header-wrapper'>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 3, 2020</small>
            </div>
        </header>
        )

        const rootElement = document.getElementById('root')
        // we render the JSX element using the ReactDOM package
        ReactDOM.render(<Header />, rootElement)
    ```
## 컴포넌트에서 jsx 랜더링하는 법
* {}안에 전달한다.
    ```javascript
    import React from 'react'
    import ReactDOM from 'react-dom'

    const welcome = 'Welcome to 30 Days Of React'
    const title = 'Getting Started React'
    const subtitle = 'JavaScript Library'
    const firstName = 'Asabeneh'
    const lastName = 'Yetayeh'
    const date = 'Oct 3, 2020'

    // JSX element, header
    const header = () => {
    return (
        <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
            Instructor: {firstName} {lastName}
            </p>
            <small>Date: {date}</small>
        </div>
        </header>
    )
    }
    const rootElement = document.getElementById('root')
    // we render the App component using the ReactDOM package
    ReactDOM.render(<Header />, rootElement)
    ```