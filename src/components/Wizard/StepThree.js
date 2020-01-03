import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class StepThree extends Component {
    constructor(){
        super();
        this.state={
            mortgage:0,
            rent:0,
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    addHouse=()=>{
        const {name,address,city,state,zip}= this.state;
        const body= {name,address,city,state,zip};

        axios.post('/api/house',body).then(()=>{
        })
    }

    render() {
        return (
            <div>
                <h2>Recommended Rent:</h2>

                <h2>Monthly Mortgage Amount</h2>
                <input name='mortgage' type='number'/>

                <h2>Desired Monthly Rent</h2>
                <input name='rent' type='number'/>

                <Link to='/wizard/step2'><button>Previous Step</button></Link>
                 
                <Link to='/'><button onClick={this.addHouse}>Complete</button></Link>
                
            </div>
        )
    }
}
