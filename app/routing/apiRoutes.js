//API route is for the data, help determine the user sees or what they can post to the server

//this page is to help direct the user whenever, 
//when they click on a link the page will know where to direct them
const friendsData = require('../data/friends.js')

// Pull in required dependencies
// var path = require('path');

// Export HTML routes
module.exports = function(app) {
	// console.log('___ENTER htmlRoutes.js___');

    // Home page, root
    //send a file using express
    //if they are using the app direct them to home
	// app.use(function(req, res) {
	// 	res.sendFile(path.join(__dirname, '../public/home.html'));
	// });

	// Survey page
	app.get('/api/survey', function(req, res) {
res.json(friendsData)
	});
};
