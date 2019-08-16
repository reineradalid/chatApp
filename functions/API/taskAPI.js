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

export async function GET_USER(){
    
    var Parse = PARSE();
    var user = Parse.Object.extend("_User");
    var query = new Parse.Query(user);
    
    const user_data = await query.find().then((res) => {

        return JSON.stringify(res);
    }, (error) => {
        console.log(error);
    });

   
   
    var userArr = JSON.parse(user_data);
    var prepArr = []
    userArr.forEach(data => {
        var user = {id : data.objectId , name : data.firstname + ' ' + data.lastname}
        prepArr.push(user)
    });
      return prepArr;
}

export async function ADD_TASKS(title, description, start, end, priority, assign_to){
    //console.log(title + description + start + end + location);
    
    var Parse = PARSE();
    var Task = Parse.Object.extend("tasks");


    const tasks = new Task();

    tasks.set("title", title);
    tasks.set("description",description);
    tasks.set("start", start);
    tasks.set("end", end);
    tasks.set("priority", priority);
    tasks.set("assigned_to", assign_to);
    

    tasks.save()
   .then((tasks) => {
   // Execute any logic that should take place after the object is saved.
   alert('New object created with objectId: ' + tasks.id);
   }, (error) => {
   // Execute any logic that should take place if the save fails.
    //error is a Parse.Error with an error code and message.
   alert('Failed to create new object, with error code: ' + error.message);
   });

}


