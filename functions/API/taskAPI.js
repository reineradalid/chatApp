import {async_storage, storage} from '../../storage/init';
import {storeData} from '../../storage/storage_action';


function PARSE(){
    var Parse = require('parse/react-native');
    Parse.setAsyncStorage(async_storage);
    Parse.serverURL = 'https://js-parse.ml/parse';
    Parse.initialize("PARSE17210462175", "QQOXZS4CZOMF4QPUFYM8ICYAT4SXNZXF41A5CIYTM6BBAZW0KLF5LQK79UCB");  
    return Parse;
}


export async function READ_TASK(id){
    
    var Parse = PARSE();
    var tasks = Parse.Object.extend("tasks");
    var query = new Parse.Query(tasks);
    
    const task_data = await query.find().then((res) => {

        return JSON.stringify(res);
    }, (error) => {
        console.log(error);
    });

    return task_data;

}

