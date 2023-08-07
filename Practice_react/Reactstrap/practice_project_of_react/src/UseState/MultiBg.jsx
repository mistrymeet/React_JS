import React, { useState } from 'react'

function MultiBg() {
    let [textcolor, SetTextColor] = useState(0)
    let colArr = ['red', 'blue', 'green', 'yellow', 'pink', 'greenyellow']
    let bgArr = ['yellow', 'pink', 'greenyellow', 'red', 'blue', 'green']
    function clickMe() {
        if (textcolor < 5) {
            SetTextColor(textcolor + 1)
        } else {
            SetTextColor(0)
        }
    }
    return (
        <>
            <div className="main" style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'darkcyan',
                textAlign: 'center',
                backgroundColor: bgArr[textcolor]
            }}>
                <div className="marr" style={{ margin: '0px 400px' }}>
                    <div className="padd" style={{ padding: '300px 0px' }}>
                        <h1 style={{ color: colArr[textcolor] }}>Hello, My Name Is Meet Mistry</h1>
                        <button className='btn btn-danger' onClick={() => clickMe()} style={{ backgroundColor: colArr[textcolor], color: bgArr[textcolor] }}>Click Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiBg