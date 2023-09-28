//import fetch from "node-fetch";

export async function main() {
  console.log("test");
  var mysql = require('mysql2');

  var connection = mysql.createConnection({
    host     : "db",
    user     : "myuser",
    password : "mypassword",
    port     : "3306"
  });

  connection.connect(function(err : any) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }

    console.log('Connected to database.');
  });

  connection.end();
}

// function checkSFWeather() {
//   return fetch("https://www.metaweather.com/api/location/2487956/").then(
//     (res) => res.json()
//   );
// }
