//this page is to help direct the user whenever


// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

	// A default, catch-all route that leads to `home.html` which displays the home page.
	app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
 //display the survey page.
 app.get('/survey',function (req, res) {
	res.sendFile(path.join(__dirname + '../public/survey.html'));
});
};
