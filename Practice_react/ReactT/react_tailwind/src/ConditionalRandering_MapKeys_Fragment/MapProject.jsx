import React from 'react'

let newArr = [
    {
        "city": "Delhi",
        "country": "India",
        "iso2": "IN",
        "state_name": "Delhi",
        "capital": "admin",
        "population": "32226000"
    },
    {
        "city": "Mumbai",
        "country": "India",
        "iso2": "IN",
        "state_name": "Mahārāshtra",
        "capital": "admin",
        "population": "24973000"
    },
    {
        "city": "Kolkāta",
        "country": "India",
        "iso2": "IN",
        "state_name": "West Bengal",
        "capital": "admin",
        "population": "18502000"
    },
    {
        "city": "Bangalore",
        "country": "India",
        "iso2": "IN",
        "state_name": "Karnātaka",
        "capital": "admin",
        "population": "15386000"
    },
    {
        "city": "Chennai",
        "country": "India",
        "iso2": "IN",
        "state_name": "Tamil Nādu",
        "capital": "admin",
        "population": "12395000"
    },
    {
        "city": "Hyderābād",
        "country": "India",
        "iso2": "IN",
        "state_name": "Telangāna",
        "capital": "admin",
        "population": "10494000"
    },
    {
        "city": "Pune",
        "country": "India",
        "iso2": "IN",
        "state_name": "Mahārāshtra",
        "capital": "",
        "population": "8231000"
    },
    {
        "city": "Ahmedabad",
        "country": "India",
        "iso2": "IN",
        "state_name": "Gujarāt",
        "capital": "minor",
        "population": "8009000"
    },
    {
        "city": "Sūrat",
        "country": "India",
        "iso2": "IN",
        "state_name": "Gujarāt",
        "capital": "",
        "population": "6538000"
    },
    {
        "city": "Prayagraj",
        "country": "India",
        "iso2": "IN",
        "state_name": "Uttar Pradesh",
        "capital": "",
        "population": "5954391"
    },
    {
        "city": "Lucknow",
        "country": "India",
        "iso2": "IN",
        "state_name": "Uttar Pradesh",
        "capital": "admin",
        "population": "3382000"
    },
    {
        "city": "Jaipur",
        "country": "India",
        "iso2": "IN",
        "state_name": "Rājasthān",
        "capital": "admin",
        "population": "3073350"
    },
    {
        "city": "Cawnpore",
        "country": "India",
        "iso2": "IN",
        "state_name": "Uttar Pradesh",
        "capital": "",
        "population": "2701324"
    },
    {
        "city": "Mirzāpur",
        "country": "India",
        "iso2": "IN",
        "state_name": "Uttar Pradesh",
        "capital": "",
        "population": "2496970"
    },
    {
        "city": "Nāgpur",
        "country": "India",
        "iso2": "IN",
        "state_name": "Mahārāshtra",
        "capital": "admin",
        "population": "2405665"
    },
    {
        "city": "Ghāziābād",
        "country": "India",
        "iso2": "IN",
        "state_name": "Uttar Pradesh",
        "capital": "",
        "population": "2375820"
    },
    {
        "city": "Vadodara",
        "country": "India",
        "iso2": "IN",
        "state_name": "Gujarāt",
        "capital": "",
        "population": "2065771"
    },
    {
        "city": "Vishākhapatnam",
        "country": "India",
        "iso2": "IN",
        "state_name": "Andhra Pradesh",
        "capital": "",
        "population": "2035922"
    },
    {
        "city": "Indore",
        "country": "India",
        "iso2": "IN",
        "state_name": "Madhya Pradesh",
        "capital": "",
        "population": "1994397"
    },
    {
        "city": "Thāne",
        "country": "India",
        "iso2": "IN",
        "state_name": "Mahārāshtra",
        "capital": "",
        "population": "1886941"
    },
    {
        "city": "Bhopāl",
        "country": "India",
        "iso2": "IN",
        "state_name": "Madhya Pradesh",
        "capital": "admin",
        "population": "1798218"
    },
    {
        "city": "Chinchvad",
        "country": "India",
        "iso2": "IN",
        "state_name": "Mahārāshtra",
        "capital": "",
        "population": "1729320"
    },
    {
        "city": "Patna",
        "country": "India",
        "iso2": "IN",
        "state_name": "Bihār",
        "capital": "admin",
        "population": "1684222"
    },
    {
        "city": "Bilāspur",
        "country": "India",
        "iso2": "IN",
        "state_name": "Chhattīsgarh",
        "capital": "",
        "population": "1625502"
    },
    {
        "city": "Ludhiāna",
        "country": "India",
        "iso2": "IN",
        "state_name": "Punjab",
        "capital": "",
        "population": "1618879"
    },
    {
        "city": "Agwār",
        "country": "India",
        "iso2": "IN",
        "state_name": "Uttar Pradesh",
        "capital": "",
        "population": "1585705"
    },
    {
        "city": "Āgra",
        "country": "India",
        "iso2": "IN",
        "state_name": "Uttar Pradesh",
        "capital": "",
        "population": "1585704"
    },
    {
        "city": "Madurai",
        "country": "India",
        "iso2": "IN",
        "state_name": "Tamil Nādu",
        "capital": "minor",
        "population": "1561129"
    },
    {
        "city": "Jamshedpur",
        "country": "India",
        "iso2": "IN",
        "state_name": "Jhārkhand",
        "capital": "",
        "population": "1558000"
    },
    {
        "city": "Nāsik",
        "country": "India",
        "iso2": "IN",
        "state_name": "Mahārāshtra",
        "capital": "",
        "population": "1486053"
    },
    {
        "city": "Farīdābād",
        "country": "India",
        "iso2": "IN",
        "state_name": "Haryāna",
        "capital": "",
        "population": "1404653"
    }
]

function MapProject() {
    return (
        <>
            {newArr.map((e, i)=>{
                return <h1 key={i}>{e.city}</h1>
            })}
        </>

    )
}

export default MapProject