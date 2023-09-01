import React, { useState } from 'react'
import { userAuth } from './Auth'

function Login() {
    let [userdata, SetUserData] = useState()
    let auth = userAuth()

    function addData() {
        auth.logIn(userdata)
    }

    return (
        <>
            <h1>Login</h1>
            <input type="text"
                className='border-black border-2'
                onChange={(e) => SetUserData(e?.target?.value)} />
            <button className='btn btn-success'
                onClick={() => addData()}>
                Login
            </button>
        </>
    )
}

export default Login