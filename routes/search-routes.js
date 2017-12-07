// *********************************************************************************
// search-routes.js - this file offers a set of routes for getting data from MLS
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var Retsly = require('js-sdk')
var retsly = Retsly.create(ACCESS_TOKEN, [VENDOR]);
var request = retsly.listings()
    .query({ bedrooms: 3 })
    .getAll();

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the property
    app.get("/api/search", function (req, res) {
        // findAll returns all entries for a table when used with no options
        // db.Property.findAll({
        //     include: [
        //         { model: db.Feature, as: 'Feature' },
        //         { model: db.Room, as: 'Room' },
        //         { model: db.Address, as: 'Address' }]
        // }).then(function (dbProperty) {
        //     // We have access to the property as an argument inside of the callback function
        //     res.json(dbProperty);
        



        var request = retsly.listings()
            .query({ bedrooms: 3 })
            .getAll();

        // });
    });


};
