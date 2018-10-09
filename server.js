const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.json());
app.use(express.static(path.join(__dirname, './app/public')));


// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
    //we will know when the server started to run
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});