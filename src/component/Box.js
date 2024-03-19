import React from 'react'

const Box = (props) => {
    console.log("p",props)
    return (
    <div className='Box'>
        <h1>{props.title}</h1>
        <img className='item-img' src={props.item && props.item.img}/>
        <h2>{props.result}</h2>
    </div>
    )
}

export default Box