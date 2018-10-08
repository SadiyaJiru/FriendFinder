//API route is for the data, help determine the user sees or what they can post to the server
var path = require("path");

//this page is to help direct the user whenever, 
//when they click on a link the page will know where to direct them
var friendsData  = require('../data/friends.js');

//import friends data

var totalDiff = 0;
// Export API routes
module.exports = function(app) {

	// Survey page
	app.get('/api/friends', function(req, res) {
res.json(friendsData)
	});
app.post('/api/friends', function(req, res) {
    var matchFound = {
    name: '',
    image: '',
    matchDifference: 1000
};
    var userInputData = req.body;
    var userName = userInputData.name;
    var userImg = userInputData.image;
    var userScore = userInputData.score;

    var totalDiff = 0;


//loop through all the friends 
for (var i = 0; i < friends.length-1; i++){
    console.log(friends[i].name);
    totalDiff = 0;


for(var u = 0; u < 10; u++){
    //returns absolute value 
    totalDiff += Math.abs(userScore[u].scores[u]-parseInt[u](friends[i].score[u]));
}
}
	// If lowest difference, record the friend match
    if (totalDiff <= matchFound.fd) {
        matchFound.name = friends[i].name;
        matchFound.photo = friends[i].photo;
        matchFound.matchDifference = totalDiff;
    }

    
    var result = friendsData[matchFound];
    res.json(bff);
// Add new user
friendsData.push(userInputData);
res.json(result);
// Send appropriate response
// res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

})
};