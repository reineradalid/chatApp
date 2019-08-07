import { AsyncStorage } from 'react-native';
import {async_storage, storage} from '../../storage/init';


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

        storage.save({
            key: 'loginData', // Note: Do not use underscore("_") in key!
            data: prep_data,
            // if expires not specified, the defaultExpires will be applied instead.
            // if set to null, then it will never expire.
            expires: 1000 * 3600
        });
        

        return prep_data;

    }).catch(err =>{
        console.log("ERROR : " + err.code + " Message : " + err.message);
        return err;
    });

    return res.hasOwnProperty('oid') ? 'VALID' : 'INVALID';

}

