import CounterReduder from './counterReducer';
import DisplayReducer from './displayReducer';
import {combineReducers} from 'redux';

const reducers= combineReducers({
    counter : CounterReduder,
    // display : DisplayReducer
});

export default reducers;