import React from 'react';
import {tenHighestPopulation as Data} from './data/ten_most_highest_populations';


const Graph=()=>{
    const max=Math.max.apply(Math, Data.map(function(o) { return o.population; }))
    console.log(max);
    return(
        <div>
            {Data.map(ele=><div key={ele.country} style={{padding:'5px'}}>
                <span style={{display:'inline-block',width:'33%'}}>{ele.country}</span> 
                {stick(ele.population,max)} 
                <span style={{display:'inline-block',textAlign:'right'}}>{ele.population}</span>
                </div>)}
        </div>
    )
}

const stick=(val,max)=>{
    return(
        <div style={{display:'inline-block',width:'55%'}}>
            <div style={{display:'inline-block',background:'#db6b19',width:`${(val/max)*100}%`}}>.</div>
        </div>
    )

}

export default Graph