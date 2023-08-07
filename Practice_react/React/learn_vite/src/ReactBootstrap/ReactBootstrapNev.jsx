import React from 'react'
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiArchive, BiHeart, BiSearch, BiUser } from "react-icons/bi";

function ReactBootstrapNev() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid style={{margin:'0px 50px'}}>
                    <Navbar.Brand href="#"><img src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png" alt="" style={{ height: '50px' }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontWeight: 'bold', fontSize: '13px', alignItems: 'center', wordSpacing: '2px', gap: '15px', flex: '0.7' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">MEN</Nav.Link>
                            <Nav.Link href="#action2">WOMEN</Nav.Link>
                            <Nav.Link href="#action3">KIDS</Nav.Link>
                            <Nav.Link href="#action3">HOME & LIVING</Nav.Link>
                            <Nav.Link href="#action3">BEAUTY</Nav.Link>
                            <Nav.Link href="#action3">STUDIO<sup style={{ color: 'red' }}>NEW</sup></Nav.Link>
                        </Nav>
                        <Form className="d-flex" style={{ flex: '0.7'}}>
                            <ButtonGroup style={{width:'100%'}}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search for products, brands and more"
                                    aria-label="Search"
                                    style={{borderRadius:'10px 0px 0px 10px'}}
                                />
                                <button className='btn btn-danger'><BiSearch/></button>
                            </ButtonGroup>
                        </Form>
                        <Nav style={{ flex: '0.3',display:'flex',justifyContent:'center',alignItems:'center',gap:'15px' }}>
                            <Nav.Link style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',fontSize:'15px'}}>
                                <BiUser/>
                                <span style={{fontWeight: 'bold', fontSize: '13px'}}>Profile</span>
                            </Nav.Link>
                            <Nav.Link style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',fontSize:'15px'}}>
                                <BiHeart/>
                                <span style={{fontWeight: 'bold', fontSize: '13px'}}>Wishlist</span>
                            </Nav.Link>
                            <Nav.Link style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',fontSize:'13px'}}>
                                <BiArchive/>
                                <span style={{fontWeight: 'bold', fontSize: '13px'}}>Bag</span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default ReactBootstrapNev