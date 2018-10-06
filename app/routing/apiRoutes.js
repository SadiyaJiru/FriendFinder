//API route is for the data, help determine the user sees or what they can post to the server

//this page is to help direct the user whenever, 
//when they click on a link the page will know where to direct them
const friendsData = require('../data/friends.js')
var path = require('path');
//import friends data
var friendsData = require ("../data/friends.js");

// Export API routes
module.exports = function(app) {

	// Survey page
	app.get('/api/friends', function(req, res) {
res.json(friends)
	});
};
app.post('/api/friends', function(req, res) {

    var userInput = res.body;
    var userResponse = userInput.scores;

    //calculate the friendship match 
const matchName = "";
const matchImage = "";

//initial value 
const totalDiff = 100;

//loop through all the friends 
for (var i = 0; i < friendsData.length; i++){
const diff = 0;
for(var u = 0; u < userResponse.length; u++){
    //returns absolute value 
    diff += Math.abs(friendsData[i].scores[u]-userResponse[u]);
}
}
	// If lowest difference, record the friend match
    if (diff < totalDiff) {

        totalDiff = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
    }
// Add new user
friendsData.push(userInput);

// Send appropriate response
res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

})