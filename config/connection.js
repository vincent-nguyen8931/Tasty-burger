var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "burgers_db"
  });
};

module.exports = connection;

