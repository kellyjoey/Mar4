// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var $;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservation = [{
  name: "KJ",
  phone: "555-555-5555",
  email: "none@none.com",
  unique_id: "tableplease"
}];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {

  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserves", function(req, res) {
  
  res.sendFile(path.join(__dirname, "reserves.html"));
});

// Create New Reservations - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newreservation = req.body;

  console.log(newreservation);

  // We then add the json the user sent to the reservation array
  reservation.push(newreservation);

  // We then display the JSON to the users
  res.json(newreservation);
  fs.appendFile("tables.txt", JSON.stringify(newreservation));
  console.log(newreservation);
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




