import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import store,{ UPDATE_STEP_ONE } from '../../store';


export default class StepOne extends Component {
    constructor() {
        super();
        const reduxState= store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                name:store.getState().name,
                address: store.getState().address,
                city: store.getState().city,
                state: store.getState().state,
                zip: store.getState().zip
            })

        });
    }
    handleInputChange =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleStepOne=(e)=>{
        store.dispatch({
            type: UPDATE_STEP_ONE,
            payload: e.target.value,
          })
    }
       


    render() {
        return (
            <div>
                    <h2>Property Name</h2>
                    <input name='name' onChange={(e)=>this.handleInputChange(e)}/>

                    <h2>Address</h2>
                    <input name='address' onChange={(e)=>this.handleInputChange(e)}/>

                    <h2>City</h2>
                    <input name='city' onChange={(e)=>this.handleInputChange(e)}/>

                    <h2>State</h2>
                    <input name='state' onChange={(e)=>this.handleInputChange(e)}/>

                    <h2>Zip</h2>
                    <input name='zip' onChange={(e)=>this.handleInputChange(e)}/>
                    <Link to='/wizard/step2'><button>Next Step</button></Link>

            </div>
        )
    }
}
