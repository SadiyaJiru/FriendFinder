// Pull in required dependencies
//recieve our info back in jason form
var bodyParser = require('body-parser');
var express = require('express');
//path is built in node
var path = require('path');
//express makes routing easy using node js
var app = express();


// Configure the Express application
//take whatever port is defined by Heroku or 8080 for local
var PORT = process.env.PORT || 8080;
// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));



// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);
// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);
// Start listening on PORT




//If the form was posted correctly page will show new frend without refresh 
// res.redirect("/");

app.listen(PORT, function() {
    //we will know when the server started to run
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});