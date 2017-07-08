var friendsArray = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
	  // Convert string values to integers
    for(var key in req.body.scores){
      req.body.scores[key] = parseInt(req.body.scores[key]);
    }
    friendsArray.push(req.body);
    
    // Ranking Algorithm
    var bestFriendTotal=50; 
		var bestFriend;
		var bestFriendIndex;

		// For each potential friend in the api
		for(var key in friendsArray){
		  var friendTotal = 0;
		  // For each question score of each potential friend
		  for(var i in friendsArray[key].scores){
		  	// Add the total differences (absolute) for each question
		    friendTotal += Math.abs(friendsArray[key].scores[i]-friendsArray[friendsArray.length-1].scores[i]);
		    // At the end of the survey questions, if the total is less than the best friend total then you have a new best friend.
		    if(i==9 && friendTotal<bestFriendTotal && friendsArray[key]!=friendsArray[friendsArray.length-1]){
		      bestFriendTotal = friendTotal;
		      bestFriend = friendsArray[key].name;
		      bestFriendIndex = friendsArray[key];
		    }
		  }
		}
    console.log("Best Friend = ");
    console.log(bestFriend);

    res.redirect('/home');
    // alert(bestFriend);

  });
};