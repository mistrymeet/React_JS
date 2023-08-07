import React from 'react'
import TailwindCard from './TailwindCard'

let data = [{
    img: 'https://images.unsplash.com/photo-1619999812032-864c47bcace1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhbmVsJTIwbm8uNXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'N°5 Chanel (100ml)',
    description: 'The nose behind this fragrance is Ernest Beaux. Top notes are Aldehydes, Ylang-Ylang, Neroli, Bergamot and Lemon.',
    price: '₹ 19,999.00'
}, {
    img: 'https://images.unsplash.com/photo-1624798956425-ef88fc12b540?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVyc2FjZSUyMGVyb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Varsace Eros',
    description: 'The nose behind this fragrance is Aurelien Guichard. Top notes are Mint, Green Apple and Lemon.',
    price: '₹ 9,200.00'
},{
    img:'https://images.unsplash.com/photo-1578996834254-13d1b661a5ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxwZXJmdW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    name: `L'Interdit Givenchy`,
    description: `A white floral cut through with dark notes unleashing a bold luminosity that flirts with obscurity.`,
    price: '₹ 12,750.00'
},{
    img: 'https://images.unsplash.com/photo-1674670516304-abdf7bf3497f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxndWNjaSUyMGd1aWx0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Gucci Guilty ',
    description: "Gucci Guilty Women's is defined by a signature fougère accord of geranium commonly used in men's scents.",
    price: '₹ 5400.00'
}]

function MapData() {
    return (
        <>
            {data.map((e, i) => {
                return <TailwindCard pData={e} key={i} />
            })}
        </>
    )
}

export default MapData