var friendsArray = [
{
  "name":"Adam",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
},
{
  "name":"Brandon",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      3,
      2,
      1,
      2,
      3,
      5,
      1,
      4,
      2,
      2
    ]
},
{
	"name":"Aris",
	"photo":"https://stockphoto.jpg",
	"scores":[
			5,
			5,
			1,
			3,
			3,
			2,
			4,
			4,
			5,
			1
		]
},
{
	"name":"John",
	"photo":"https://stockphoto.jpg",
	"scores":[
			4,
			4,
			5,
			5,
			1,
			1,
			2,
			1,
			5,
			5
		]
}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;

// ***** Compatibility Ranking Algorithm ***** //

// var bestFriendTotal=50;
// var bestFriend;
// var bestFriendIndex;

// for(var key in friendsArray){
// //   console.log(friendsArray[key].name);
// //   console.log(friendsArray[key].scores);
//   var friendTotal = 0;
//   for(var i in friendsArray[key].scores){
// //     console.log(friendsArray[key].scores[i]);
// //     console.log("Newest " + friendsArray[friendsArray.length-1].scores[i]);
// //     console.log(Math.abs(friendsArray[key].scores[i]-friendsArray[friendsArray.length-1].scores[i]));
//     friendTotal += Math.abs(friendsArray[key].scores[i]-friendsArray[friendsArray.length-1].scores[i]);
//     if(i==9 && friendTotal<bestFriendTotal && friendsArray[key]!=friendsArray[friendsArray.length-1]){
//       bestFriendTotal = friendTotal;
//       bestFriend = friendsArray[key].name;
//       bestFriendIndex = friendsArray[key];
//       console.log(friendTotal);
//       console.log(bestFriend);
//     }
//   }
// }