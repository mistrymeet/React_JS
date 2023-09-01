import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Order from './Order'
import Payment from './Payment'
import BikeOrder from './BikeOrder'
import CarOrders from './CarOrders'
import Nav from './Nav'

function AdminRoute() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/order'>
                        <Route index element={<Order />} />
                        <Route path='bike' element={<BikeOrder />} />
                        <Route path='car' element={<CarOrders />} />
                    </Route>
                    <Route path='/payment' element={<Payment />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AdminRoute