import React from 'react'

const Box = (props) => {
    let result;
    if(
        props.title ==="Computer" && 
        props.result !== "tie" &&
        props.result !== ""){
            result = props.result === "Win" ? "lose" : "Win";
        } else{result = props.result
        }
    return (
    <div className={`Box ${result}`}>
        <h1>{props.title}</h1>
        
        <h2>{props.item && props.item.name}</h2>
        <img className='item-img' src={props.item && props.item.img}/>
        <h2>{result}</h2>
    </div>
    )
};

export default Box