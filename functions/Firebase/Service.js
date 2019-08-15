import * as firebase from 'firebase';

class FirebaseSvc {
    constructor() {
      
        const firebaseConfig = {
            apiKey: "<YOUR-API-KEY>",
            authDomain: "<YOUR-AUTH-DOMAIN>",
            databaseURL: "<YOUR-DATABASE-URL>",
            storageBucket: "<YOUR-STORAGE-BUCKET>"
          };
          
          firebase.initializeApp(firebaseConfig);

    }
  }
  const firebaseSvc = new FirebaseSvc();
  export default firebaseSvc;