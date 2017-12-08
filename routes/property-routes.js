// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the property
    app.get("/api/property", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Property.findAll({
            include: [
                { model: db.Feature, as:'Feature'},
                { model: db.Room, as: 'Room'},
                { model: db.Address, as:'Address' } ]
        }).then(function (dbProperty) {
            // We have access to the property as an argument inside of the callback function
            res.json(dbProperty);

        });
    });

    // POST route for saving a new property
    app.post("/api/property", function (req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.property.create({
            property_type: req.body.property_type,
            city: req.body.city,
            property_date: req.body.property_date,
            no_of_rooms: req.body.no_of_rooms,
            area_size: req.body.area_size,
            per_unit_price: req.body.per_unit_price
            
        }).then(function (dbProperty) {
            // We have access to the new property as an argument inside of the callback function
            // res.json(dbProperty);
            console.log(dbProperty)
        })
            .catch(function (err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });

    // DELETE route for deleting property. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/property/:id", function (req, res) {
        // We just have to specify which property we want to destroy with "where"
        db.property.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbProperty) {
            res.json(dbProperty);
        });

    });

    // PUT route for updating property. We can get the updated todo data from req.body
    app.put("/api/property", function (req, res) {

        // Update takes in an object describing the properties we want to update, and
        // we use where to describe which objects we want to update
        db.property.update({
            property_type: req.body.property_type,
            property_add_id: req.body.property_add_id,
            city: req.body.city,
            property_date: req.body.property_date,
            no_of_rooms: req.body.no_of_rooms,
            area_size: req.body.area_size,
            per_unit_price: req.body.per_unit_price
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbProperty) {
                res.json(dbProperty);
            })
            .catch(function (err) {
                // Whenever a validation or flag fails, an error is thrown
                // We can "catch" the error to prevent it from being "thrown", which could crash our node app
                res.json(err);
            });
    });

    

};
