import React from 'react'

const Colorblock=()=>{
    const row=8;
    const col=4;
    const hexaarr=Array.from({length:col},()=>Array(row));
    hexaarr.map(line=>{
        for(let i=0;i<line.length;i++){
            line[i]=hexaColor();
        }
    })
    return(
        <Colorblockpresent hexaarr={hexaarr}/>
    );
}

const Colorblockpresent=({hexaarr})=>{
    return(
        <div style={{display:'flex',flexDirection:'column','alignItems':'center'}}>
            <h1>30 Days Of React</h1>
            <h2>Number Generator</h2>
            <div style={{width:'100%'}}>{hexaarr.map(
                line=>(
                    <div style={{width:'100%'}}>{line.map(
                        ele=>(
                        <span key={ele} 
                        style={{
                            display:'inline-block',
                            width:'12.5%',
                            height:'100px',
                            padding:'30px',
                            color:'white',
                            background:`${ele}`,
                            }}>{ele}</span>))}
                    </div>
                    ))}
            </div>
        </div>
    )
}

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }


export default Colorblock;