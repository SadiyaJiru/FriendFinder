const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();
// app.use(express.urlencoded({extended: false }));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.text());
app.use(express.json());
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