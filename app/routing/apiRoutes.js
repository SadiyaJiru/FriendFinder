//API route is for the data, help determine the user sees or what they can post to the server
var path = require("path");

//this page is to help direct the user whenever, 
//when they click on a link the page will know where to direct them
var friendsData  = require('../data/friends.js');

//import friends data

// Export API routes
module.exports = function(app) {

	// Survey page
	app.get('/api/friends', function(req, res) {
res.json(friendsData)
	});  app.post('/api/friends', function(req,res){
        //grabs the new friend's scores to compare with friends in friendsData array
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;
    
        //runs through all current friends in list
        for(var i=0; i<friendsData.length; i++){
          var scoresDiff = 0;
          //run through scores to compare friends
          for(var j=0; j<newFriendScores.length; j++){
            scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])));
          }
    
          //push results into scoresArray
          scoresArray.push(scoresDiff);
        }
    
        //after all friends are compared, find best match
        for(var i=0; i<scoresArray.length; i++){
          if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
          }
        }
    
        //return bestMatch data
        var bff = friendsData[bestMatch];
        res.json(bff);
    
        //pushes new submission into the friendsList array
        friendsData.push(req.body);
      });
    };