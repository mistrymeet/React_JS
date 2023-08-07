import React from 'react'
import DealCard from './DealCard'

let data = [{
    img: 'https://images.pexels.com/photos/6705270/pexels-photo-6705270.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Kurtas',
    price: 'Under ₹899'
},{
    img: 'https://images.pexels.com/photos/4947741/pexels-photo-4947741.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Dresses',
    price: 'Under ₹899'
},{
    img: 'https://images.pexels.com/photos/17214351/pexels-photo-17214351/free-photo-of-clothes-hanging-on-wall-and-accessories-in-boxes-near.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Accessories',
    price: 'Min 50% Off'
},{
    img: 'https://images.pexels.com/photos/313705/pexels-photo-313705.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Flats & Heels',
    price: 'Min 60% Off'
},{
    img: 'https://images.pexels.com/photos/6978040/pexels-photo-6978040.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Natural Care',
    price: 'Gifts With Purchases'
}]

function DealData() {
    return (
        <>
            {data.map((x, i)=>{
                return <DealCard dataDeal={x} key={i} />
            })}
        </>
    )
}

export default DealData