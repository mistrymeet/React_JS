import React, { useState } from 'react'

function PropsUseStateExperiment(props) {
    let [change, SetChange] = useState(props?.arr?.sheela)
    function changeC(){
        SetChange(change.toUpperCase())
    }
    return (
        <div>
            <div className='main bg-amber-400'>
                <div className="padding p-72">
                    <div className="main p-7 text-center">
                        <h1 className='pb-8 font-bold text-2xl'>{change}</h1>
                        <button className='bg-slate-900 py-2 px-4 rounded-xl text-white border-green-600 border-2' onClick={() => changeC()}>Click ME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropsUseStateExperiment