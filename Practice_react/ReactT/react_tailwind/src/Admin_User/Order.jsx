import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Order() {
    return (
        <>
            <h1>Order</h1>
            <ol>
                <li>
                    <NavLink to={'/order/car'}>Car Orders</NavLink>
                </li>
                <li>
                    <NavLink to={'/order/bike'}>Bike Orders</NavLink>
                </li>
            </ol>
        </>
    )
}

export default Order