import {async_storage, storage} from '../../storage/init';
import {storeData} from '../../storage/storage_action';


function PARSE(){
    var Parse = require('parse/react-native');
    Parse.setAsyncStorage(async_storage);
    Parse.serverURL = 'https://js-parse.ml/parse';
    Parse.initialize("PARSE17210462175", "QQOXZS4CZOMF4QPUFYM8ICYAT4SXNZXF41A5CIYTM6BBAZW0KLF5LQK79UCB");  
    return Parse;
}


export async function READ_EVENTS(id){
    
    var Parse = PARSE();
    var events = Parse.Object.extend("events");
    var query = new Parse.Query(events);
    
    const event_data = await query.find().then((res) => {

        return JSON.stringify(res);
    }, (error) => {
        console.log(error);
    });

    return event_data;

}

export async function ADD_EVENTS(title, description, start, end, location){
    //console.log(title + description + start + end + location);
    
    var Parse = PARSE();
    var Event = Parse.Object.extend("events");


    const events = new Event();

    events.set("title", title);
    events.set("description",description);
    events.set("startDate", start);
    events.set("endDate", end);
    events.set("location", location);
    events.set("status", "Active");
    

    events.save()
    //.then((events) => {
    // Execute any logic that should take place after the object is saved.
   //alert("Succes");
   // }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
   // alert('Failed to create new object, with error code: ' + error.message);
    //});

}



