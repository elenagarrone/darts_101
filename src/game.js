function Game(){
  this.players = []
};

Game.prototype.addPlayer = function(player) {
  if (this.players.length >= 2) throw("Sorry, the game cannot have more than two players")
  game.players.push(player)
};

Game.prototype.winner = function(player1, player2) {
  if(player1.isWinner = true) return 'Player1 is the winner'
  if(player2.isWinner = true) return 'Player2 is the winner'
};

// Game.prototype.nextTurnTo = function(player, player2){
//   if (this.players[1].score > this.players[0].score) {
//     return player2
//   }
// }