import React, { useEffect, useState } from 'react'
import '../Product.json'
import axios from 'axios'
import { Table } from 'react-bootstrap'

function Api1() {
    let [data, SetDAta] = useState([])
    let [ID, SetId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                console.log("res", res.data)
                SetDAta(res.data)
            }).catch((err) => {
                console.log('err', err.message)
            })
    }, [])
    return (
        <>
            <h1>Api</h1>
            <div>
                <input type="text" onChange={(e) => SetId(e.target.value)} className='border-4' />
            </div>
            {
                data.length > 0 ? <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.username}</td>
                                        <td>{e.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : null
            }
        </>
    )
}

export default Api1