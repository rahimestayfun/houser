import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class StepTwo extends Component {
    constructor(){
        super();
        this.state={
            image:''
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                <h2>Image Url</h2>
                <input name='image' onClick={this.handleInputChange}/>
                
                <Link to='/wizard/step1'><button>Previous Step</button></Link>
                <Link to='/wizard/step3'><button>Next Step</button></Link>
            </div>
        )
    }
}
