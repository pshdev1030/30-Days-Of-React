import React from 'react';


const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  const styles =(bgColor)=>{
    return{
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    backgroundColor:`${bgColor}`,
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
    }
  }
  
  const HexaColor = () => {
    const bgColor = Array.from({length:4},()=>hexaColor());
    return (
      <HexaPresent colorCode={bgColor}/>
    )
  }

  const HexaPresent=({colorCode})=>{
    return (
      <div>
        {colorCode.map(ele=>
        <div style={styles(ele)}>
          <h2>{ele}</h2>
        </div>)}
      </div>
    )

  }

  export default HexaColor;