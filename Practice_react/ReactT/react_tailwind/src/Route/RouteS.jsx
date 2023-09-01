import React, { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import './Route.css'
import Logout from './Logout'
import ProtectedRoute from './ProtectedRoute'

function RouteS() {
    let [userdata, SetUserData] = useState(false)

    useEffect(() => {
        let data = localStorage.getItem('userLogin')
        SetUserData(data)
    }, [])
    return (
        <>
            {/* <BrowserRouter>
                <ol className='flex justify-start gap-3'>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    {
                        userdata ? <li>
                            <NavLink to={'/logout'}>Logout</NavLink>
                        </li> : <li>
                            <NavLink to={'/login'}>Login</NavLink>
                        </li>
                    }
                </ol>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<ProtectedRoute components={<About />} />} />
                    <Route path='/login' element={<Login SetUserData={SetUserData} />} />
                    <Route path='/logout' element={<Logout SetUserData={SetUserData} />} />
                </Routes>
            </BrowserRouter> */}
        </>
    )
}

export default RouteS