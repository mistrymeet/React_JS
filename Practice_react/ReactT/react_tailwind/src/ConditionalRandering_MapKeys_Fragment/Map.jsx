import React from 'react'

let newArr = ['meet', 'prem', 'dinesh', 'sheela', 'hetal']
function Map() {
    return (
        <>
        {newArr.map((x, i)=>{
            return <h1 key={i}>{x}</h1>
        })}
        </>
    )
}

export default Map