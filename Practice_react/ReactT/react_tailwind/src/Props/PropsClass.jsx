import React, { Component } from 'react'

export default class PropsClass extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}
