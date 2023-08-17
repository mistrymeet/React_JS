import React, { createContext, useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'

export const ContextInfo = createContext()

function Context() {
    let [input, SetInput] = useState('')
    return (
        <>
            <ContextInfo.Provider value={{ SetInput, input }}>
                <ComA />
                <ComB />
            </ContextInfo.Provider>
            {input}
        </>
    )
}

export default Context