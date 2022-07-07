import React, { Fragment } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = ({props}) => {
    debugger;
    // const count = useSelector(state => state.counter);
    // const display = useSelector(state => state.dispaly);
    //sync
    const dispatch= useDispatch();
    //dummy change
    // const onButtonClick=type=>{
    //     switch(type){
    //         case 'increment':
    //             dispatch(increment());
    //         case 'decrement':
    //             dispatch(decrement());
    //     }
    // }
    return (
        <Fragment>
            <h1>Counter Example</h1>
           <h1>{props.count}</h1>
            <Stack direction="row" spacing={2}>
                <Button onClick={()=>dispatch(increment())} variant="contained">Increament</Button>
                <Button onClick={()=>dispatch(decrement())} variant="contained">Decrement</Button>
            </Stack>
        </Fragment>
    )
}

export default Counter;