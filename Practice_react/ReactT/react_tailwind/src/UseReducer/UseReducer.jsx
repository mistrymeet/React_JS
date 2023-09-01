import React, { useReducer } from 'react'
import { Button } from 'react-bootstrap'
let initialValue = 0
const reducer = (state, action) => {
    switch (action) {
        case ('inc'):
            return state + 1

        case ('dec'):
            return state - 1

        case ("reset"):
            return 0

        default:
            break;
    }
}



function UseReducer() {
    let [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <>
            <h1>{count}</h1>
            <Button variant="success" onClick={() => dispatch('inc')}>Inc</Button>{' '}
            <Button variant="danger" onClick={() => dispatch('dec')}>Dec</Button>{' '}
            <Button variant="primary" onClick={() => dispatch('reset')}>Reset</Button>{' '}
        </>
    )
}

export default UseReducer