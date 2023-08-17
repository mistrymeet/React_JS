import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function IncrementDecrement() {
    let [data, SetData] = useState(0)
    function incre() {
        SetData(data + 1)
    }

    function dec() {
        if (data === 0) {
            alert('Addition First')
        } else {
            SetData(data - 1)
        }
    }

    function reset() {
        SetData(0)
    }
    return (
        <>
            <div className="main" style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'darkmagenta',
                textAlign: 'center'
            }}>
                <div className="marr" style={{ margin: '0px 400px' }}>
                    <div className="padd" style={{ padding: '300px 0px' }}>
                        <h1>{data}</h1>
                        <Button
                            variant="success"
                            onClick={() => incre()}>
                            Increment
                        </Button>{' '}
                        <Button
                            variant="danger"
                            onClick={() => dec()}>
                            Decrement
                        </Button>{' '}
                        <Button
                            variant="warning"
                            onClick={() => reset()}>
                            Reset All
                        </Button>{' '}
                    </div>
                </div>
            </div>
        </>
    )
}

export default IncrementDecrement