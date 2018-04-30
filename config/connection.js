// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if(process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql,createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3000,
        host: 'localhost',
        user: 'root',
        password: 'prat4lYf!',
        database: 'burgers_db'
    })
};

// Make the connection to MySQL
connection.connect(function(err) {
    if(err) {
        console.error('error connecting: ' +err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;