const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "bq0nwugsfmaiyfmtdzw2-mysql.services.clever-cloud.com",
    database: "bq0nwugsfmaiyfmtdzw2",
    user: "urciypgypjmvflsz",
    password: "iR1wDCvrOMxM4iHEHpOc",
    port: "3306",
  });

 if(!connection)
 {connection.connect((err) => {
    if (err) {
      return;
    }
  
    console.log("database connected ");
  });
  }


  module.exports= connection;