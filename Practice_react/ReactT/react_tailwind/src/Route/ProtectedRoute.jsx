import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({ components }) {
    let navigate = useNavigate()
    useEffect(() => {
        let isLogin = localStorage.getItem('userLogin')
        if (!isLogin) {
            navigate('/login')
        }
    })
    return (
        <>
            {components}
        </>
    )
}

export default ProtectedRoute