import React, { Component } from 'react'

export default class House extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
                <div>Home Listings</div>
                <p>Property Name: {this.props.name}</p>
                <p>Address: {this.props.address}</p>
                <p>City: {this.props.city}</p>
                <p>State: {this.props.state}</p>
                <p>Zip: {this.props.zip}</p>
                <button onClick={()=>this.props.deleteHouse(this.props.id)}>X</button>
                
            </div>
        )
    }
}
