## Mapping Arrays
* 배열은 제일 자주 사용되는 데이터 구조이다.
* html의 요소를 어레이에 추가하여 jsx로 어레이를 수정하는 map을 사용한다.

## Mapping and Rendering
* 대부분의 데이터는 배열 혹은 객체배열의 형식이다.
* 이를 랜더링 하려면 맵을 사용하여 데이터를 수정해야 한다.
    * 예시 코드(한 줄로 랜더링 된다.)
    ```javascript
        import React from 'react'
        import ReactDOM from 'react-dom'
        const App = () => {
        return (
            <div className='container'>
            <div>
                <h1>Numbers List</h1>
                {[1, 2, 3, 4, 5]}
            </div>
            </div>
        )
        }

        const rootElement = document.getElementById('root')
        ReactDOM.render(<App />, rootElement)
    ```
    * 예시코드(map을 사용하였다.)
    ```javascript
        import React from 'react'
        import ReactDOM from 'react-dom'

        const skills = [
        ['HTML', 10],
        ['CSS', 7],
        ['JavaScript', 9],
        ['React', 8],
        ]

        // Skill Component
        const Skill = ({ skill: [tech, level] }) => (
        <li>
            {tech} {level}
        </li>
        )

        // Skills Component
        const Skills = ({ skills }) => {
        const skillsList = skills.map((skill) => <Skill skill={skill} />)
        console.log(skillsList)
        return <ul>{skillsList}</ul>
        }

        const App = () => {
        return (
            <div className='container'>
            <div>
                <h1>Skills Level</h1>
                <Skills skills={skills} />
            </div>
            </div>
        )
        }

        const rootElement = document.getElementById('root')
        ReactDOM.render(<App />, rootElement)
    ```
    * 예시코드( 객체배열, map을 사용하였다.)
    ```javascript
        import React from 'react'
        import ReactDOM from 'react-dom'

        const countries = [
        { name: 'Finland', city: 'Helsinki' },
        { name: 'Sweden', city: 'Stockholm' },
        { name: 'Denmark', city: 'Copenhagen' },
        { name: 'Norway', city: 'Oslo' },
        { name: 'Iceland', city: 'Reykjavík' },
        ]

        // Country component
        const Country = ({ country: { name, city } }) => {
        return (
            <div>
            <h1>{name}</h1>
            <small>{city}</small>
            </div>
        )
        }

        // countries component
        const Countries = ({ countries }) => {
        const countryList = countries.map((country) => <Country country={country} />)
        return <div>{countryList}</div>
        }
        // App component
        const App = () => (
        <div className='container'>
            <div>
            <h1>Countries List</h1>
            <Countries countries={countries} />
            </div>
        </div>
        )

        const rootElement = document.getElementById('root')
        ReactDOM.render(<App />, rootElement)
    ```
## 배열에서의 key의 사용
* 변경,추가,제거와 같은 작업을 할 때 식별하는데에 도움을 준다.
* 배열 내부의 요소에 고유한 값인 key를 넣어야 한다.
* key를 제공하지 않으면 브라우저에 경고가 발생한다.
    * 예시코드
    ```javascript
        import React from 'react'
        import ReactDOM from 'react-dom'

        const Numbers = ({ numbers }) => {
        // modifying array to array of li JSX
        const list = numbers.map((num) => <li key={num}>{num}</li>)
        return list
        }

        const App = () => {
        const numbers = [1, 2, 3, 4, 5]

        return (
            <div className='container'>
            <div>
                <h1>Numbers List</h1>
                <ul>
                <Numbers numbers={numbers} />
                </ul>
            </div>
            </div>
        )
        }

        const rootElement = document.getElementById('root')
        ReactDOM.render(<App />, rootElement)
    ```
    * 예시코드
    ```javascript
        import React from 'react'
        import ReactDOM from 'react-dom'

        const countries = [
        { name: 'Finland', city: 'Helsinki' },
        { name: 'Sweden', city: 'Stockholm' },
        { name: 'Denmark', city: 'Copenhagen' },
        { name: 'Norway', city: 'Oslo' },
        { name: 'Iceland', city: 'Reykjavík' },
        ]

        // Country component
        const Country = ({ country: { name, city } }) => {
        return (
            <div>
            <h1>{name}</h1>
            <small>{city}</small>
            </div>
        )
        }

        // countries component
        const Countries = ({ countries }) => {
        const countryList = countries.map((country) => (
            <Country key={country.name} country={country} />
        ))
        return <div>{countryList}</div>
        }
        const App = () => (
        <div className='container'>
            <div>
            <h1>Countries List</h1>
            <Countries countries={countries} />
            </div>
        </div>
        )

        const rootElement = document.getElementById('root')
        ReactDOM.render(<App />, rootElement)
    ```