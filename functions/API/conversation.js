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

export async function GET_CONVO_DATA(id){
    
    var Parse = PARSE();
    var priv_chat = Parse.Object.extend("private_chats");
    var query = new Parse.Query(priv_chat);
    const chats = await query.get(id).then((res) => {
        return JSON.stringify(res);
    }, (error) => {
        console.log(error);
    });

    //console.log(chats);

    return chats;

}


export async function SEND_MESSAGE(chat_id, myId, myName, myMsg){

    var Parse = PARSE();
    var priv_chat = Parse.Object.extend("private_chats");
    var chats = new priv_chat();

    var query = new Parse.Query(chats);
    query.equalTo('objectId', chat_id);


    await query.first().then((chat) => {

        var data = {sId:myId, name:myName, message:myMsg};
        console.log(data)
        if(chat.length !== 0){
            chat.add("chats", data);
            chat.save();

            console.log("SUCCESS!");
        }else{
            console.log("NOT FOUND")
        }

    }, (error) => {
        console.log(error);
    });


    


    // const chats = await query.get(id).then((res) => {
    //     return JSON.stringify(res);
    // }, (error) => {
    //     console.log(error);
    // });

    // //console.log(chats);

    // return chats;

}


