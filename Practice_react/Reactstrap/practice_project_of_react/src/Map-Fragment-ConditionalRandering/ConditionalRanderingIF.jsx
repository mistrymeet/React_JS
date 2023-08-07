import React from 'react'

function ConditionalRanderingIF(props) {
    if (props.isInput === 'email') {
        return (
            <>
                <label htmlFor="mail">Email :</label>
                <input type="email" name="" id="mail" />
            </>
        )
    } else if (props.isInput === 'password') {
        return (
            <>
                <label htmlFor="pass">Password :</label>
                <input type="password" name="" id="pass" />
            </>
        )
    } else if (props.isInput === 'color') {
        return (
            <>
                <label htmlFor="col">Color :</label>
                <input type="color" name="" id="" />
            </>
        )
    } else if (props.isInput === 'number') {
        return (
            <>
                <label htmlFor="num">Number :</label>
                <input type="number" name="" id="num" />
            </>
        )
    } else {
        return (
            <>
                <label htmlFor="tex">Text :</label>
                <input type="text" name="" id="txt" />
            </>
        )
    }
}

export default ConditionalRanderingIF