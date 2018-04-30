// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// Create the burger object
var burger = {
    // Select all burger table entries
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    // The variables cols and vals are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },

    // The objColsVals is an object specifying columns as object keys with associated values
    updatOne: function(objColsVals, condition, cb) {
        orm.updatOne('burgers', objColsVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the databas functions for the controller (burgers_controller.js)
module.exports = burger;