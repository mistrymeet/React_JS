import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function Api2() {
    let [data, SetData] = useState({})
    let [ID, SetId] = useState('')
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ID}`)
            .then((res) => {
                console.log(res.data)
                SetData(res.data)
            }).catch((err) => {
                console.log(err.message)
            })
    }, [ID])
    return (
        <>
            <h1>API</h1>
            <input type="text" className='border-4 border-black' onChange={(e) => SetId(e.target.value)} />
            {
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                    </tbody>
                </Table>
            }
        </>
    )
}

export default Api2