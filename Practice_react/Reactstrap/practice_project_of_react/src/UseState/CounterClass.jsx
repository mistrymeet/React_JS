import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor() {
        super()
        this.state = {
            no: 0
        }
    }

    clickMe() {
        this.setState({ no: this.state.no + 1 })
    }

    render() {
        return (
            <>
                <div className="main" style={{
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: 'darkkhaki',
                    textAlign: 'center'
                }}>
                    <div className="marr" style={{ margin: '0px 400px' }}>
                        <div className="padd" style={{ padding: "300px 0px" }}>
                            <h1 style={{ color: 'white' }}>{this.state.no}</h1>
                            <button className='btn btn-danger' onClick={() => this.clickMe()}>Click Here</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
