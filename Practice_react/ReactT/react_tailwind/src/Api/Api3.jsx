import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function Api3() {
    let [data, SetData] = useState({})
    let [ID, SetId] = useState('')
    let [Api, SetApi] = useState(0)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${ID}`)
            .then((res) => {
                console.log(res.data)
                SetData(res.data)
            }).catch((err) => {
                console.log(err.message)
            })
    }, [Api])
    return (
        <>
            <h1>API</h1>
            <input type="text" className='border-4 border-black' onChange={(e) => SetId(e.target.value)} />
            <button onClick={() => SetApi(Api + 1)} className='btn btn-danger'>Click Me</button>
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

export default Api3