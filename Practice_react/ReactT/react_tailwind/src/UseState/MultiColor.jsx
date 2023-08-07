import React, { useState } from 'react'

function MultiColor() {
    let [textcolor, SetTextColor] = useState(0)
    let arr = ['red', 'blue', 'aqua', 'green', 'yellow']
    let bgC = ['yellow','green','black','blue','red']

    function changeC() {
        if (textcolor < 4) {
            SetTextColor(textcolor + 1)
        }else{
            SetTextColor(0)
        }
    }
    return (
        <div>
            <div className='main bg-amber-400' style={{backgroundColor: bgC[textcolor]}}>
                <div className="padding p-72">
                    <div className="main p-7 text-center">
                        <h1 className='pb-8 font-bold text-2xl' style={{ color: arr[textcolor] }}>My Name Is Meet Mistry</h1>
                        <button className='bg-slate-900 py-2 px-4 rounded-xl text-white border-green-600 border-2' onClick={() => changeC()} style={{color: bgC[textcolor], backgroundColor: arr[textcolor]}}>Click ME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiColor