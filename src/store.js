import {createStore} from 'redux';


const initialState={
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    image:'',
    mortgage:0,
    rent:0,
}
export const UPDATE_STEP_ONE="UPDATE_STEP_ONE"

function reducer(state=initialState, action){
    const {type,payload}= action;
    switch(type){
        case UPDATE_STEP_ONE:
            return {...state, name: payload,address: payload, city:payload,state:payload,zip:payload}
        default: 
        return state;
    } 
}

export default createStore(reducer);








