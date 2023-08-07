import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(){
        super()
        this.state = {
            no:0
        }
    }
    counter(){
        this.setState({no: this.state.no + 1})
    }
    
    render() {
        return (
            <div className='main bg-amber-400'>
            <div className="padding p-72">
                <div className="main p-7 text-center">
                    <h1 className='pb-8 font-bold text-2xl'>{this.state.no}</h1>
                    <button className='bg-slate-900 py-2 px-4 rounded-xl text-white border-green-600 border-2' onClick={()=> this.counter()}>Click ME</button>
                </div>
            </div>
        </div>
        )
    }
}
