import React from 'react'

function PropsEx(props) {
    return (
        <div> {props?.obj?.name}</div>
    )
}

export default PropsEx