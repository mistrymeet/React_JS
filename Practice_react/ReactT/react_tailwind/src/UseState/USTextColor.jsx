import React, { useState } from 'react'

function USTextColor() {
    let [color, SetColor] = useState("red")
    function changeColor(){
        SetColor('blue')
    }
    return (
        <div>
            <h1 style={{color: color}}>My Name Is Meet</h1>
            <button className='bg-red-900' onClick={()=>changeColor()}>Click Me</button>
        </div>
    )
}

export default USTextColor