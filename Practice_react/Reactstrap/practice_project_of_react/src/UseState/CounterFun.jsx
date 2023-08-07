import React, { useState } from 'react'

function CounterFun() {
    let [countit, SetCountIt] = useState(0)
    function counter() {
        SetCountIt(countit + 1)
    }
    return (
        <>
            <div className="main" style={{
                backgroundColor: 'papayawhip',
                height: '100vh',
                width: '100vw',
                textAlign: 'center'
            }}>
                <div className="mar" style={{ margin: '0px 400px' }}>
                    <div className="padd" style={{ padding: '300px 0px' }}>
                        <h1>{countit}</h1>
                        <button className='btn btn-success' onClick={() => counter()}>Click Here</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterFun