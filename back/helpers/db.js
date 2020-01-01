const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "test_user",
  password: "testpass",
  database: "homer_odyssey_db"
});

module.exports = connection;
