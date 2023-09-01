import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext(null)

function Auth({ children }) {
    let [user, SetUser] = useState('')
    let navigate = useNavigate()

    function logIn(name) {
        localStorage.setItem('userLogin', name)
        navigate('/')
    }

    function logOut() {
        localStorage.removeItem("userLogin")
        navigate('/login')
    }

    useEffect(() => {
        let data = localStorage.getItem('userLogin')
        SetUser(data)
    })

    return (
        <>
            <AuthContext.Provider value={{ logIn, logOut, user }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const userAuth = () => {
    return useContext(AuthContext)
}

export default Auth