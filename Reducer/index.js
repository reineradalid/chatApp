import {combineReducers} from 'redux';

//REDUCERS
import {loginStatus} from './loginReducer';

//REDUCERS END



const allReducer = combineReducers({
    login_status: loginStatus
    
    //LINK ALL REDUCER HERE (THIS IS YOUR STATE)
});


export default allReducer;