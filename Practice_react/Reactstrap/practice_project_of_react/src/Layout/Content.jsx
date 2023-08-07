import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="con" style={{ height: '450px', flex: '1', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Content</div>
                <div className="main" style={{ height: '450px', flex: '1', backgroundColor: 'yellowgreen', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Main Content</div>
                <div className="con" style={{ height: '450px', flex: '1', backgroundColor: 'green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Content</div>
            </div>
        )
    }
}
