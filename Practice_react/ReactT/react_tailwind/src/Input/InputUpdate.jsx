import React, { useState } from 'react'

function InputUpdate() {
    let [state, Setstate] = useState('')
    let [arr, SetArr] = useState([])
    function inputChange(e) {
        Setstate(e.target.value)
    }

    function storeData() {
        SetArr([...arr, state])
        Setstate('')
    }

    function deleteHandler(index) {
        arr.splice(index, 1);
        SetArr([...arr])
    }
    return (
        <>
            <div className="main text-center" style={{ height: '100vh', width: '100vw', backgroundColor: 'turquoise', padding: '300px', }}>
                <div className="main">
                    <label htmlFor="inp">Name :</label>
                    <input type="text" name="" id="inp" className='border-cyan-500 border-2' onChange={(e) => inputChange(e)} value={state} />
                </div>
                <div className="btn my-10">
                    <button className='bg-lime-400 p-2 rounded ' onClick={() => storeData()}>Click Me</button>
                </div>
                <div className='text-center'>
                    <table class="border-separate border-spacing-2 border border-slate-400 ">
                        <thead>
                            <tr>
                                <th class="border border-slate-300 ...">No</th>
                                <th class="border border-slate-300 ...">Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td class="border border-slate-300 ...">{i + 1}</td>
                                        <td class="border border-slate-300 ...">{e}</td>
                                        <td>
                                            <button className='bg-red-600 py-2 px-4 rounded' onClick={() => deleteHandler(i)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default InputUpdate