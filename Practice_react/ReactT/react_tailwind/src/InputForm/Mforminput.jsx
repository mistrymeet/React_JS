import { radio } from '@material-tailwind/react';
import React, { useState } from 'react'
import { Button, Col, Form, FormLabel, Row, Table } from 'react-bootstrap'
import { AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";


function Mforminput() {
    let [formdata, SetFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    })

    let [formarr, SetFormArr] = useState([])
    let [formindex, SetFormIndex] = useState(null)

    function setData(e) {
        SetFormData({ ...formdata, [e.target.name]: e.target.value })
    }

    function getData() {
        if (formdata.firstName || formdata.lastName || formdata.email || formdata.contact || formdata.address || formdata.city || formdata.state || formdata.zip) {
            SetFormArr([...formarr, formdata])
            SetFormData({
                firstName: '',
                lastName: '',
                email: '',
                contact: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            })
        } else {
            alert("Add Some Data First")
        }
    }

    function deleteData(index, data) {
        formarr.splice(1, index)
        SetFormArr(...formarr)
    }

    function clearAll() {
        SetFormArr([])
    }

    function updateData(index, data) {
        SetFormData(data)
        SetFormIndex(index)
    }

    function updateAll() {
        if (formindex || formindex === 0) {
            formarr.splice(formindex, 1, formdata)
            SetFormArr([...formarr])
            SetFormData({
                firstName: '',
                lastName: '',
                email: '',
                contact: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            })
            SetFormIndex(null)
        } else {
            alert('Add Some Data First')
        }
    }

    return (
        <>
            <div className="main" style={{
                maxHeight: '100%',
                width: '100vw',
                backgroundColor: 'darksalmon'
            }}>
                <div className="marr" style={{ margin: '0px 300px', padding: '' }}>
                    <div className="padd" style={{ padding: '100px 0px 20px 0px' }}>
                        <Form>
                            <Row className='mb-2'
                                style={{ filter: blur("4px") }}>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        placeholder="First name"
                                        name='firstName'
                                        value={formdata.firstName}
                                        onChange={(e) => setData(e)}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        placeholder="Last name"
                                        name='lastName'
                                        value={formdata.lastName}
                                        onChange={(e) => setData(e)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            value={formdata.email}
                                            name='email'
                                            type="email"
                                            placeholder="name@example.com"
                                            onChange={(e) => setData(e)}

                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Contact No</Form.Label>
                                        <Form.Control
                                            name='contact'
                                            value={formdata.contact}
                                            type='text'
                                            placeholder='Enter Contact'
                                            onChange={(e) => setData(e)}

                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    value={formdata.address}
                                    name='address'
                                    type="text"
                                    placeholder="Enter Address Here"
                                    onChange={(e) => setData(e)}
                                />
                            </Form.Group>

                            <Row className='mb-2'>
                                <Col>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        placeholder="Enter City"
                                        name='city'
                                        value={formdata.city}
                                        onChange={(e) => setData(e)}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label>State</Form.Label>
                                    <Form.Select
                                        name='state'
                                        value={formdata.state}
                                        onChange={(e) => setData(e)}
                                    >
                                        <option>Choose...</option>
                                        <option>Gujarat</option>
                                        <option>Maharastra</option>
                                        <option>Madhya Pradesh</option>
                                        <option>Hariyana</option>
                                        <option>Rajasthan</option>
                                        <option>Arunachal Pradesh</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Zip Code"
                                        name='zip'
                                        value={formdata.zip}
                                        onChange={(e) => setData(e)}
                                    />
                                </Col>
                            </Row>

                            <div className='text-center'>
                                <Button
                                    variant='success'
                                    onClick={() => getData()}
                                    className='my-2 h-12 w-24'>
                                    Add
                                </Button>
                                <Button
                                    variant='danger'
                                    onClick={() => clearAll()}
                                    className='my-2 h-12 w-24 ms-2'>
                                    Clear All
                                </Button>
                                <Button
                                    variant='warning'
                                    onClick={() => updateAll()}
                                    className='my-2 h-12 w-24 ms-2'>
                                    Update All
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div>
                    {
                        formarr.length > 0 ? <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    formarr.map((e, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{e.firstName}</td>
                                                <td>{e.lastName}</td>
                                                <td>{e.email}</td>
                                                <td>{e.contact}</td>
                                                <td>{e.address}</td>
                                                <td>{e.city}</td>
                                                <td>{e.state}</td>
                                                <td>{e.zip}</td>
                                                <td>
                                                    <Button
                                                        variant='danger'
                                                        onClick={() => deleteData(i, e)}
                                                        className='my-2 h-12 w-24'>
                                                        Delete
                                                    </Button>
                                                    <Button
                                                        variant='warning'
                                                        onClick={() => updateData(i, e)}
                                                        className='ms-2 my-2 h-12 w-24'>
                                                        Update
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table> : null
                    }
                </div>
            </div >
        </>
    )
}

export default Mforminput