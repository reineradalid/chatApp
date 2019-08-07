import { AsyncStorage } from 'react-native';
import myStore from '../../Store';

function PARSE(){

    var Parse = require('parse/react-native');
    Parse.setAsyncStorage(AsyncStorage);
    Parse.serverURL = 'https://js-parse.ml/parse';
    Parse.initialize("PARSE17210462175", "QQOXZS4CZOMF4QPUFYM8ICYAT4SXNZXF41A5CIYTM6BBAZW0KLF5LQK79UCB");  

    return Parse;

}

async function set_status(){
    //myStore.dispatch({type: 'LOGGED_IN'});
    console.log("LOGIN DATA : " + JSON.stringify(myStore.getState()));

}

export async function VERIFY_ACCOUNT(payload){
    
    var Parse = PARSE();
    const res = await Parse.User.logIn(payload.username, payload.password).then(data => {

        const prep_data = {
            oid : data.id,
            username: data.get('username'),
            f_name :  data.get('firstname'),
            l_name : data.get('lastname'),
            gender : data.get('gender'),
            position: data.get('position'),
            img : data.get('user_img'),
            test : data.get('test_user'),
        }

        return prep_data;

    }).catch(err =>{
        console.log("ERROR : " + err.code + " Message : " + err.message);
        return err;
    });

    if(res.hasOwnProperty('oid')){
        myStore.dispatch({type: 'SET_USER_DATA', payload: res});
        //set_status();
    }

    return 'STATUS';

}

