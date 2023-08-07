import React, { useState } from 'react'

function Counter() {
    let [value, Setvalue] = useState(0)
    function counter(){
        Setvalue(value + 1)
    }
    return (
        <div>
            <div className='main bg-amber-400'>
            <div className="padding p-72">
                <div className="main p-7 text-center">
                    <h1 className='pb-8 font-bold text-2xl'>{value}</h1>
                    <button className='bg-slate-900 py-2 px-4 rounded-xl text-white border-green-600 border-2' onClick={()=> counter()}>Click ME</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Counter