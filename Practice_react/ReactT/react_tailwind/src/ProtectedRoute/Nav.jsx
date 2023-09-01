import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import { userAuth } from './Auth'

function Nav() {
    let auth = userAuth()

    return (
        <>
            <ol className='flex gap-10'>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/service'}>Service</NavLink>
                </li>
                <li>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </li>
                {
                    !auth?.user &&
                    <li>
                        <NavLink to={'/login'}>Login</NavLink>
                    </li>
                }
            </ol>
        </>
    )
}

export default Nav