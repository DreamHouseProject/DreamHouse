// *********************************************************************************
// search-routes.js - this file offers a set of routes for getting data from MLS
// *********************************************************************************

// Dependencies
// =============================================================
var ACCESS_TOKEN = process.env.RETS_TOKEN || "37fc149e3c1c03f3fdfe4f9ea831edb5";
var VENDOR = "test_sf"
var request = require('request');
var location = "";
// // Routes
// // =============================================================
module.exports = function (app) {

    // // GET route for getting all of the property
    // app.get("/api/search", function (req, res) {
    //     // findAll returns all entries for a table when used with no options
    //     var listDB = "";
    //     location = req.query.query;

    //     if (location === "SanFrancisco"){
    //         listDB = "test_sf"
    //     }else{
    //         listDB = "test_sd"
    //     }
    //     // console.log(req);
    //     var queryURL = "https://rets.io/api/v2/" + listDB + "/listings?access_token=" + ACCESS_TOKEN + "&limit=10"; //"&near=" + location 
    //     console.log(queryURL)
    //    request(queryURL, function(err, response){
    //        response.body = JSON.parse(response.body)
    //     //    console.log(response.body)
    //         var list =[];

    //         for (i=0;i<10;i++){
    //             list.push({
    //                 hAddress: response.body.bundle[i].UnparsedAddress,
    //                 AgentName: response.body.bundle[i].ListAgentFullName,
    //                 AgentPhone: response.body.bundle[i].ListAgentPreferredPhone,

    //             });
    //         }

    //         res.json(list);
    //     });
       
        // GET route for getting all of the property
        app.get("/api/search", function (req, res) {
            // findAll returns all entries for a table when used with no options
            var listDB = "";
        location = req.query.query;

        if (location === "SanFrancisco"){
            listDB = "test_sf"
        }else{
            listDB = "test_sd"
        }
            // console.log(req);
            var queryURL = "https://rets.io/api/v2/" + listDB + "/listings?access_token=" + ACCESS_TOKEN + "&limit=10"; //"&near=" + location 
            console.log(queryURL)
            request(queryURL, function (err, response) {
                response.body = JSON.parse(response.body)
                //    console.log(response.body)
                var list = [];

                for (i = 0; i < 10; i++) {
                    list.push({
                        hAddress: response.body.bundle[i].UnparsedAddress,
                        listPrice: response.body.bundle[i].ListPrice,
                        AgentName: response.body.bundle[i].ListAgentFullName,
                        AgentPhone: response.body.bundle[i].ListAgentPreferredPhone,

                    });
                }

                res.json(list)
            })

       
    app.get("/api/searchOnboard", function(req,res){

        var queryURL1 = "https://search.onboard-apis.com/communityapi/v2.0.0/Area/Full/?AreaId=ZI" + postalCode
        request(queryURL, function (err, response) {
            response.body = JSON.parse(response.body)
            //    console.log(response.body)
            res.json(response.body)

        })
     });



});
};
