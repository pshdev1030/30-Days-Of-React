import React from 'react';

const makeInput=(id,value)=>{
    return{
        id,
        value,
    };
}

const Subscribe=()=>{
    const Info=[makeInput(1,'First name'),makeInput(2,'Last name'),makeInput(3,'Email')];

    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',height:'25%',
            backgroundColor:'#9aede6',
            padding:'150px'}
            }>
            <h2 style={{fontSize:'40px', marginBottom:'30px'}}>Subscribe</h2>
            <h3 style={{fontSize:'20px', marginBottom:'30px'}}>Sign up with your email address to receive news and updates</h3>
            <Inputform Info={Info}/>
            <button style={{ color:'white',backgroundColor:'red',marginTop:'30px',padding:'15px',borderRadius:'10px',width:'200px'}}>Subscribe</button>
        </div>
    )

}

const Inputform=({Info})=>{
    return(
        <div>
            {Info.map(ele=>
            <input key={ele.id } 
            placeholder={ele.value} 
            style={{
                padding:'10px',
                margin:'4px',
                borderRadius:'10px'
                }}/>)}
        </div>
    )
}


export default Subscribe;