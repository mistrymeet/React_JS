import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({ SetUserData }) {
    let navigate = useNavigate()
    function logOut() {
        localStorage.removeItem('userLogin')
        SetUserData(false)
        navigate('/login')
    }
    return (
        <>
            <h1>Logout</h1>
            <button className='btn btn-danger'
                onClick={() => logOut()}>
                Logout
            </button>
        </>
    )
}

export default Logout