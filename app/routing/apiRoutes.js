//API route is for the data, help determine the user sees or what they can post to the server

//this page is to help direct the user whenever, 
//when they click on a link the page will know where to direct them
var friendsData = require ("../data/friends.js");

var path = require('path');
//import friends data

var totalDiff = 0;
// Export API routes
module.exports = function(app) {

	// Survey page
	app.get('/api/friends', function(req, res) {
res.json(friends)
	});
};
app.post('/api/friends', function(req, res){
    var matchFound = {
    ame: "",
    image: "",
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
// Add new user
friends.push(userInputData);
res.json(matchFound);
// Send appropriate response
// res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

})