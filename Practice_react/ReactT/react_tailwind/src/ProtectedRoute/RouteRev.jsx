import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import Login from './Login'
import Profile from './Profile'
import Nav from './Nav'
import Auth from './Auth'
import ProtectedRoute from './ProtectedRoute'

function RouteRev() {
    return (
        <>
            {/* <BrowserRouter>
                <Auth>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/profile' element={<ProtectedRoute components={<Profile />} />} />
                    </Routes>
                </Auth>
            </BrowserRouter> */}
        </>
    )
}

export default RouteRev