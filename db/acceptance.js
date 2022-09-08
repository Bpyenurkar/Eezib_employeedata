
const mysql = require('mysql2');
const acceptance = mysql.createAcceptance({
  host: "localhost",
  //port: 3001,
  user: "root",
  password: "Omera@1234",
  database: "employeeTrack_db",
});

acceptance.connect(function(err) {
  if (err) throw err;
  //employeeTrack();
});
 module.exports = acceptance
