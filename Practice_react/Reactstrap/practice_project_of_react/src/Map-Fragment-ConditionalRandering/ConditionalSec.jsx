import React from 'react'

function ConditionalSec(props) {
    return props.isInput ? (
        <>
            <label htmlFor="email">Email :</label>
            <input type="email" name="" id="email" />
        </>
    ) : (
        <>
            <label htmlFor="col">Color :</label>
            <input type="color" name="" id="col" />
        </>
    )
}

export default ConditionalSec