// Requiring our models
var Zillow = require('node-zillow');

// Routes
// =============================================================
module.exports = function (app) {


  
  //Instantiate 
  var zillow = new Zillow('X1-ZWz1g4kla7i497_4lr3d');

  // Setting the params for the GetSearchResults api
  var parameters1 = {
    // we need to grab the user search and place it in parameters1 
    address: "350 Magellon Ave.",
    citystatezip: "94019"
    
  };


  app.get('/zillow', function(req,res){
    var parameters1 = req.query.search;
    zillow.get('GetSearchResults', parameters1)
      .then(function (results) {
        // grabbing the zpid from the results and creating a variable to feed into the GetUpdatedPropertyDetails api
        var ZPID = results.response.results.result[0].zpid

        // Setting the params for the GetUpdatedPropertyDetails api
        var parameters2 = {
          // using the ZPID variable from the GetSearchResults api and feeding it into the params2
          zpid: ZPID

        };
        zillow.get('GetUpdatedPropertyDetails', parameters2)
          .then(function (results) {
            // creating a variable with listing details
            var listDetails = results.response
            // creating a variable with listing images
            var listImages = results.response.images.image[0]

            // Listing Details
            console.log(listDetails)

            // Listing Images
            console.log(listImages)

            return results;
            // results here is an object { message: {}, request: {}, response: {}}  
          })

  })
    
    zillow.get('GetZestimate', parameters2)
      .then(function(results) {
        
        // Zindex Value
        console.log("Zindex Value: " + results.response.localRealEstate.region[0].zindexValue)
        
        // Zestimate Amount
        console.log("Zestimate Amount: " + results.response.zestimate.amount[0]._)

        // Evaluation Range (low to high)
        console.log(results.response.zestimate.valuationRange[0])

        // One week price change (deprecated true or false)
        console.log(results.response.zestimate.oneWeekChange)

        // amount that changed the past 30 days
        console.log(results.response.zestimate.valueChange)
        
        return results;
        // results here is an object { message: {}, request: {}, response: {}}  
    })
    return results;
    // results here is an object { message: {}, request: {}, response: {}}  
  })
}