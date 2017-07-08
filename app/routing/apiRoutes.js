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

		for(var key in friendsArray){
		  var friendTotal = 0;
		  for(var i in friendsArray[key].scores){
		    friendTotal += Math.abs(friendsArray[key].scores[i]-friendsArray[friendsArray.length-1].scores[i]);
		    if(i==9 && friendTotal<bestFriendTotal && friendsArray[key]!=friendsArray[friendsArray.length-1]){
		      bestFriendTotal = friendTotal;
		      bestFriend = friendsArray[key].name;
		      bestFriendIndex = friendsArray[key];
		    }
		  }
		}
    console.log("Best Friend = ");
    console.log(bestFriend);
  });
};