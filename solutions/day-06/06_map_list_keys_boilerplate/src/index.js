import React from 'react'
import ReactDOM from 'react-dom'
import Colorblock from './Colorblock'
import Graph from './Graph'

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
    <div>
      <Colorblock/>
      <Graph/>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)