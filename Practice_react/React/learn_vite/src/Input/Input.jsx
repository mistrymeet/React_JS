import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function Input() {
    let [schoolname, SetSchoolName] = useState("")
    let [schoolarr, SetSchoolArr] = useState([])
    let [schoolindex, SetSchoolIndex] = useState(null)

    function inpChange(e) {
        SetSchoolName(e.target.value)
    }

    function addData() {
        SetSchoolArr([...schoolarr, schoolname])
        SetSchoolName('')
    }

    function deleteIt(index) {
        schoolarr.splice(index, 1)
        SetSchoolArr([...schoolarr])
    }

    function clearAll() {
        SetSchoolArr([])
    }

    function updateData(index, data) {
        SetSchoolName(data)
        SetSchoolIndex(index)
    }

    function mainUpdate() {
        schoolarr.splice(schoolindex, 1, schoolname)
        SetSchoolArr([...schoolarr])
        SetSchoolName('')
        SetSchoolIndex(null)
    }

    return (
        <>
            <div className="main" style={{ backgroundColor: 'slateblue', height: '100vh', width: '100vw', textAlign: 'center' }}>
                <div className="mar" style={{ margin: '0px 400px' }}>
                    <div className="padd" style={{ padding: '300px 0px' }}>
                        <label htmlFor="txt" style={{ paddingRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>School Details :</label>
                        <input type="text" name="" id="txt" onChange={(e) => inpChange(e)} value={schoolname} className='rounded p-1' />
                        <div className='py-2 d-flex justify-content-center align-items-center gap-2'>
                            <button className='btn btn-success' onClick={() => addData()}>Add</button>
                            <button className='btn btn-danger' onClick={() => clearAll()}>Clear All</button>
                            <button className='btn btn-warning' onClick={() => mainUpdate()}>Update</button>
                        </div>
                        {
                            schoolarr.length > 0 ? <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>School Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        schoolarr.map((e, i) => {
                                            return (
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{e}</td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() => deleteIt(i)}>Delete</button>
                                                        <button className='btn btn-warning ms-1' onClick={() => updateData(i, e)}>Update</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input