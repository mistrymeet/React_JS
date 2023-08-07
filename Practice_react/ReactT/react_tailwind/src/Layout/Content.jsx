import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div className='h-96 flex justify-center'>
                <div className="cont flex-1 bg-emerald-500  flex justify-center items-center">Content</div>
                <div className="main flex-1 bg-red-500 flex justify-center items-center">Main Content</div>
                <div className="cont flex-1 bg-emerald-500 flex justify-center items-center">Content</div>
            </div>
        )
    }
}
