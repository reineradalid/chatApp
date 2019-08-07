import {combineReducers} from 'redux';

//REDUCERS
import {loginStatus, loginData} from './loginReducer';

//REDUCERS END



const allReducer = combineReducers({
    login_status: loginStatus,
    login_data : loginData
    
    //LINK ALL REDUCER HERE (THIS IS YOUR STATE)
});


export default allReducer;