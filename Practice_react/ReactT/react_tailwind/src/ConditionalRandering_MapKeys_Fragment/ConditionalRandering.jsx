import React from 'react'

function ConditionalRandering(props) {
    if (props.isMan) {
        return (
            <>
                <h1>Yes, he is a man</h1>
            </>
        )
    }else{
        return(
            <h1>No</h1>
        )
    }
}

export default ConditionalRandering