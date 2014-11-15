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

Game.prototype.nextTurnTo = function(){
  if (this._scorePlayer1 > this._scorePlayer2) {
    return true
  }
}

Game.prototype._scorePlayer1 = function() {
  return this.players[0].score
};

Game.prototype._scorePlayer2 = function() {
  return this.players[1].score
};