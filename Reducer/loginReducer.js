export function loginStatus( state = false, action){
    switch (action.type){
        case "LOGGED_IN":
            return state = true;
        case "LOGGED_OUT":
            return state = false;
        case "LOGGED_TEST":
                return state = !state;

        default:
            return state = false;
    }
}

export function loginData (state = null, action){

    switch (action.type){
        case "SET_USER_DATA":
            return state = action.payload;
        case "CLEAR_USER_DATA":
            return state = null;
        default:
            return state = null;
    }


}