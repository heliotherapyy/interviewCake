function getFriendsOfFriends(user) {
  var secondFriends = getSecondFriends(user);

  var secondsByOrder = {};
  for (var i = 0; i < secondFriends.length; i++) {
    var friend = secondFriends[i];
    secondByOrder[friend] = countMutualFriends(friend);
  }

  var array = sortByMutualFriends(secondsByOrder);
}