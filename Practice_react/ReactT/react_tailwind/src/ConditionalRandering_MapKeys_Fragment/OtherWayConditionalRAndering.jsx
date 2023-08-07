import React from 'react'

function OtherWayConditionalRAndering(props) {
    return props.isGender ? (
        <>
            <h1>Yes, He is a Boy</h1>
            {props.isYoung ? <h1>Yes, he is Young</h1> : <h1>No, He is not Young</h1>}
        </>
    ) : (
        <>
            <h1>No, She is a Girl</h1>
            {props.isBeautiful ? <h1>Yes, She is Beautiful</h1> : <h1>No, She is Not Beautiful</h1>}
        </>
    )
}

export default OtherWayConditionalRAndering