// Start: Problem-03 : FIFA Best Team Award ?

function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 != "object" || typeof player2 != "object") {
    return "Invalid";
  }

  let fareTeam1 = player1.foul + player1.cardR + player1.cardY;
  let fareTeam2 = player2.foul + player2.cardR + player2.cardY;

  if (fareTeam1 < fareTeam2) {
    return player1.name;
  } else if (fareTeam1 == fareTeam2) {
    return "Tie" ;
  }
  return player2.name;
}