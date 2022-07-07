import {defaultState } from './defaultState';

const CounterReducer=(state=defaultState.counter, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}

export default CounterReducer;