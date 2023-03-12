import React, { Component } from 'react'

export default class BoxClass extends Component {
    
    componentWillUnmount() {
        console.log("종료됨")
    }

    render() {
        return (
        <div>
            Box{this.props.num}
        </div>
        )
    }
    }
