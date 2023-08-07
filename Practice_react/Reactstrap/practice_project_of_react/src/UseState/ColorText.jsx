import React, { useState } from 'react'

function ColorText() {
    let [textcolor, SetTextColor] = useState('red')
    function clickMe() {
        SetTextColor('yellowgreen')
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
                        <h1 style={{ color: textcolor }}>Hello, My Name Is Meet Mistry</h1>
                        <button className='btn btn-danger' onClick={() => clickMe()}>Click Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ColorText