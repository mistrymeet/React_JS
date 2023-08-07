import React, { useState } from 'react'

function PropsProject(props) {
    let [text, SetText] = useState(props.name)
    function clickMe() {
        SetText(text.filter((x) => { return x.includes("m") }))
    }
    return (
        <>
            <div className="main" style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'darkcyan',
                textAlign: 'center'
            }}>
                <div className="marr" style={{ margin: '0px 400px' }}>
                    <div className="padd" style={{ padding: '300px 0px' }}>
                        <h1>{text}</h1>
                        <button className='btn btn-danger' onClick={() => clickMe()}>Click Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PropsProject