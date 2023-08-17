import React, { useContext } from 'react'
import { ContextInfo } from './Context'

function ComB3() {
    const info = useContext(ContextInfo)
    return (
        <>
            <h1>ComB3</h1>
            <h1>name : {info.input}</h1>
            <input type="text" onChange={(e) => info.SetInput(e.target.value)} />
        </>

    )
}

export default ComB3