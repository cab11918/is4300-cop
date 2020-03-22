const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'yfhenj325',
    database : 'cop'
});

// Starting our app.
const app = express();
app.use(cors());
// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        const userid = 1;
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM users where userid = ?', [userid],  function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

app.get('/buildings', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT buildings.name, concat(line1, \' \', ifnull(line2, \' \')) as address, image, count(rooms.roomid) as numberOfRooms, latitude, longitude FROM addresses left join buildings using (addressid) left join rooms using (buildingid) group by rooms.buildingid',  function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

app.get('/rooms:buildingid', function (req, res) {
    // Connecting to the database.
    let buildingid = req.params.buildingid.toString().substring(1);
    console.log(buildingid);
    connection.getConnection(function (err, connection) {
        // Executing the MySQL query (select all data from the 'users' table).
        connection.query('SELECT * FROM rooms WHERE buildingid = ?', [buildingid],  function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
        });
    });
});

// Starting our server.
app.listen(3001, () => {
    console.log('Go to http://localhost:3001/users so you can see the data.');
});
