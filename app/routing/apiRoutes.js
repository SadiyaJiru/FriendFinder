var friends = require("../data/friends.js");
module.exports = function(app) {
  // Sets the get for the api/friends route
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // This will be used to handle incoming survey results.
  //This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function(req, res) {
    //Variables for POST method
    var difference = 50;
    var matchName = "";
    var matchPhoto = "";

    //For-each loop to go through each element in the Friends array.
    friends.forEach(function(friend) {
      console.log(friend);

      //compare the matches
      var scoresArray = [];
      var totalDiff = 50;

      // Function for addition
      function add(total, num) {
        return total + num;
      }

      // Loop through each item of scoresArray [] from existing friend data and the new user,

      for (var i = 0; i < friend.scores.length; i++) {
        // Pushes the new value to the scoresArray
        scoresArray.push(
          Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i]))
        );
      }

      // Reduce the scoresArray into a single value in a variable
      totalDiff = scoresArray.reduce(add, 0);

      // If totalDiff value is smaller than the previous difference set it as the previous difference...
      if (totalDiff < difference) {
        difference = totalDiff;
        matchName = friend.name;
        matchPhoto = friend.photo;
      }
    });
    res.json({
      name: matchName,
      photo: matchPhoto
    });

    // This adds the new users sent data object to friends.js
    friends.push(req.body);
  });
  // app.post("/api/clear", function(req, res) {
  //     // Empty out the arrays of data
  //     friends.length = [];

  //     res.json({ ok: true });
  //   });
};
