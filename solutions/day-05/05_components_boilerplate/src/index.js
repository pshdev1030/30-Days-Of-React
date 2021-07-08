// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import HexaColor from './HexaColor'
import Image from './Image'
import Subscribe from './Subscribe'

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Image/>
    <Subscribe/>
    <HexaColor/>
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
