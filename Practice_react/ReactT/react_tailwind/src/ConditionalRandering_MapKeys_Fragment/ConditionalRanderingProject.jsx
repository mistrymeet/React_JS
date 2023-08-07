import React from 'react'

function ConditionalRanderingProject(props) {
    if (props.inputType === 'password') {
        return (
            <>
                <label htmlFor="pass">Password :</label>
                <input type="password" name="" id="pass" />
            </>
        )
    }else if(props.inputType === 'email'){
        return(
            <>
            <label htmlFor="email">Email :</label>
            <input type="email" name="" id="email" />
            </>
        )
    }else if(props.inputType === 'color'){
        return(
            <>
            <label htmlFor="col">Color :</label>
            <input type="color" name="" id="col" />
            </>
        )
    }else if(props.inputType === 'number'){
        return(
            <>
            <label htmlFor="num">Number :</label>
            <input type="number" name="" id="num" />
            </>
        )
    }else{
        return(
            <>
            <label htmlFor="text">Text :</label>
            <input type="text" name="" id="text" />
            </>
        )
    }
}

export default ConditionalRanderingProject