import React from 'react';
import CSS from './images/css_logo.png';
import HTML from './images/html_logo.png';
import JS from './images/js_logo.png';
import REACT from './images/react_logo.png'


const Image=()=>{
    const imgsrc=[{id:1,value:CSS},{id:2,value:HTML},{id:3,value:JS},{id:4,value:REACT}];
    return(
    <ImagePresent image={imgsrc}/>
    );
}

const ImagePresent=({image})=>{
    return(
        <div style={{display:'flex',flexDirection:'row',height:'33%'}}>
            {image.map(ele=><img key={ele.id} src={ele.value} alt={`${ele.value}_logo`} style={{width:'25%'}}/>)}
        </div>
    )
}

export default Image;