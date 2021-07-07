// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import css from './images/css_logo.png';
import html from './images/html_logo.png';
import react from './images/react_logo.png';
// To get the root element from the HTML document

// to import the doSomeMath from the math.js with or without extension

const Image=(
  <div style={{display:'flex'}}>
    <img style={{width:'300px'}} src= {css} alt='css image'/>
    <img style={{width:'300px'}} src= {html} alt='html image'/>
    <img style={{width:'300px'}} src= {react} alt='react image'/>
  </div>
  )

const InputForm=(
  <div>
      <h1>SUBSCRIBE</h1>
      <div style={{display:'flex'}}>
      <input type='text' placeholder='First name'></input>
      <input type='text' placeholder='Last name'></input>
      <input type='email' placeholder='Email name'></input>
      <button type='submit'>Subscribe</button>
      </div>
  </div>
)

const app=(
  <div style={{
    display:'flex',
    flexDirection:'column',
  }}>
    {Image}
    {InputForm}
  </div>
);

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
