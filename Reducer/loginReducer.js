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