
export function VERIFY_ACCOUNT(Parse, payload){

    console.log('IM GETTING IN TO YOU')

    var mlpromo = Parse.Object.extend("ML_PROMO");
    var query = new Parse.Query(mlpromo);
    var res = query.get("HpTWkzEDbF")
    res.then(data => {
        console.log(data);
    })
    
}
