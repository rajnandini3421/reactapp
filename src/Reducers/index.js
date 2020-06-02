import  {combineReducers} from  'redux'

import CounterReducer from '../Reducers/CounterReducer'
import isLoggedReducer from '../Reducers/isLoggedReducer'

const allReducers=combineReducers({
    counter:CounterReducer,
    isLoggedIn:isLoggedReducer
});


export default allReducers;