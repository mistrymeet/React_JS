import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ SetUserData }) {
    let navigate = useNavigate()
    function logIn() {
        localStorage.setItem('userLogin', true)
        SetUserData(true)
        navigate('/')

    }
    return (
        <>
            <h1>Login</h1>
            <button className='btn btn-success'
                onClick={() => logIn()}>LogIn
            </button>
        </>
    )
}

export default Login