import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './RHomeImg.css'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                    className="d-block w-100 lighting"
                    src="https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1190&q=80"
                    alt="First slide"
                    style={{ maxHeight: '950px' }}

                />
                <Carousel.Caption>
                    <h3>Monsoon Sale Is Live</h3>
                    <p>Upto 50% off on Your Favourite Footware.. Grab Now..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1592861438114-7c0b58ec5544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Second slide"
                    style={{ maxHeight: '950px' }}
                />

                <Carousel.Caption>
                    <h3>Your Favourite Brand Is Here</h3>
                    <p>Benfites of Buy 2 Get 1 In Levi's Rodadster Netplay And More</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1613070120286-98b11cdb9ae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    style={{ maxHeight: '950px' }}
                />

                <Carousel.Caption>
                    <h3>Special Sale on Cosmetics Products</h3>
                    <p>
                        Custumize or Combo of Your Favourite Cosmetics.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function ReactBHome() {
    return (
        <>
            <ControlledCarousel />
        </>
    )
}

export default ReactBHome