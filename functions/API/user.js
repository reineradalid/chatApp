import {async_storage, storage} from '../../storage/init';
import {storeData} from '../../storage/storage_action';


function PARSE(){
    var Parse = require('parse/react-native');
    Parse.setAsyncStorage(async_storage);
    Parse.serverURL = 'https://js-parse.ml/parse';
    Parse.initialize("PARSE17210462175", "QQOXZS4CZOMF4QPUFYM8ICYAT4SXNZXF41A5CIYTM6BBAZW0KLF5LQK79UCB");  
    return Parse;
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

        storeData('LOGIN_DATA', JSON.stringify(prep_data));

        return prep_data;

    }).catch(err =>{
        console.log("ERROR : " + err.code + " Message : " + err.message);
        return err;
    });

    return res.hasOwnProperty('oid') ? 'VALID' : res;

}

export async function GET_USER_DATA(id){
    
    var Parse = PARSE();
    var user = Parse.Object.extend("_User");
    var query = new Parse.Query(user);
    
    const user_data = await query.get(id).then((res) => {

        return JSON.stringify(res);
    }, (error) => {
        console.log(error);
    });

    return user_data;

}

