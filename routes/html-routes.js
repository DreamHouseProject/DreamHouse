// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    // console.log("in app get function")
     res.sendFile(path.join(__dirname, "../public/mainPage.html"));
  });

  // search route loads search.html
  app.get("/addUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addUser.html"));
  });

  // seller route loads seller.html
  app.get("/listing", function(req, res) {
    console.log("in /listing");
    res.sendFile(path.join(__dirname, "../public/listing.html"));
    // res.redirect("/api/search/SFO");
  });
  app.get("/listing/SD", function (req, res) {
    console.log("in /listing");
    res.sendFile(path.join(__dirname, "../public/listing.html"));
    res.redirect("/api/search/SD");
    
  });

  // property route loads addProperty.html
  app.get("/addProperty", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addProperty.html"));
  });
  
  app.get("/school", function (req, res) {
    // res.sendFile(path.join(__dirname, "../public/addUser.html"));
  });
};
