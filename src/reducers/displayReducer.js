import { defaultState } from "./defaultState";

const DisplayReducer=(state=defaultState.showCounter)=>{
    if(state===false){
        return state=true;
    }
}

export default DisplayReducer;