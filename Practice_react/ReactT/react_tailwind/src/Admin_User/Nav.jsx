import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <>
            <ol>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/payment'}>Payment</NavLink>
                </li>
                <li>
                    <NavLink to={'/order'}>Order</NavLink>
                </li>
            </ol>
        </>
    )
}

export default Nav