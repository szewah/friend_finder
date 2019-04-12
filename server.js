var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 7000;

//initiaize express
var app = express();

//set up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//import the routes
// require("./routing/html-routes")(app);

app.listen(PORT, function() {
    console.log("Magic happens at http://localhost:" + PORT);
});

