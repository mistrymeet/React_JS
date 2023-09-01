import React from 'react'
import { userAuth } from './Auth'


function Profile() {
    let auth = userAuth()
    return (
        <>
            <h1>Hello, {auth?.user}</h1>
            <button className='btn btn-danger'
                onClick={() => auth.logOut()}>
                Logout
            </button>
        </>
    )
}

export default Profile