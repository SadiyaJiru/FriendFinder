//this page is to help direct the user whenever


// Pull in required dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

	app.get('/home', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
 //display the survey page.
 app.get('/survey',function (req, res) {
	res.sendFile(path.join(__dirname + '../public/survey.html'));
});
};
