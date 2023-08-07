import React from 'react'

let data = [
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
    },]

function Map() {
    return (
        data.map((x) => { return <p>{x.city}</p> })
    )
}

export default Map