import React from 'react'
import {useSelector} from 'react-redux'

import {useDispatch} from 'react-redux'
import { increment,decrement} from '../actions/index'
const ReduxDemo =()=>{   
    const counter =useSelector(state=>state.counter);
    const isLoggedIn=useSelector(state=>state.isLoggedIn)
    const dispatch=useDispatch();
        return(
            <div>
                <h1>counter:{counter}</h1>
                <h2>isLogged:{isLoggedIn}</h2>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(decrement())}>-</button>

            </div>
        )
}



export default ReduxDemo;