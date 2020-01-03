import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

export default class Wizard extends Component {  
    render() {
        return (
            <div>
                <h1>Add New Listing
                </h1>
                    <Link to='/'>
                    <button>Cancel</button>
                    </Link>
                    <Route path='/wizard/step1' component={StepOne}></Route>
                    <Route path='/wizard/step2' component={StepTwo}></Route>
                    <Route path='/wizard/step3' component={StepThree}></Route>
                    
    
                    
                  
            </div>




        )
    }
}
