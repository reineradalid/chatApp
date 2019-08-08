import {async_storage} from '../../storage/init';


function PARSE(){
    var Parse = require('parse/react-native');
    Parse.setAsyncStorage(async_storage);
    Parse.serverURL = 'https://js-parse.ml/parse';
    Parse.initialize("PARSE17210462175", "QQOXZS4CZOMF4QPUFYM8ICYAT4SXNZXF41A5CIYTM6BBAZW0KLF5LQK79UCB");  
    return Parse;
}

export async function GET_MESSAGE_LIST(id){
    
    var Parse = PARSE();
    var priv_chat = Parse.Object.extend("private_chats");
    var query = new Parse.Query(priv_chat);
    query.containedIn("members", [id]);
    const chats = await query.find().then((res) => {

        // var ids = [];

        // res.forEach(element => {
        //     ids.push(element.id);
        // });

        return JSON.stringify(res);
    }, (error) => {
        console.log(error);
    });

    //console.log(chats);

    return chats;

}


