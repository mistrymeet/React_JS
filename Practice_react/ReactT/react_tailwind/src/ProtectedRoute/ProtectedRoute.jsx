import React, { useEffect } from 'react'
import { userAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({ components }) {
    let navigate = useNavigate()
    let auth = userAuth()
    useEffect(() => {
        if (!auth.user) {
            navigate('/login')
        }
    })
    return (
        <div>{components}</div>
    )
}

export default ProtectedRoute