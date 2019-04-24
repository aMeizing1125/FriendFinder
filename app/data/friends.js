var testProfile = require('./testFriends'); //add .js if it doens't work 
var friendsList = [];

testProfile.forEach(function (thisUser) {

  friendsList.push(thisUser);
  // console.log(thisUser);
  // console.log("-----");
});

// console.log(friendsList);

module.exports = friendsList; 
