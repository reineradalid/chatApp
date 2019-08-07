
export function GET(Parse){

    console.log('IM GETTING IN TO YOU')

    var mlpromo = Parse.Object.extend("ML_PROMO");
    var query = new Parse.Query(mlpromo);
    query.get("HpTWkzEDbF")
    .then((res) => {
        console.log(res);
    }, (error) => {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
    });

}
