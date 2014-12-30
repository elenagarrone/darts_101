function Player(){
  this.score = 101;
  this.turns = [];
  this.isWinner = false;
};

Player.prototype.addTurn = function(turn) {
  player.turns.push(turn);
};

Player.prototype.pointsLeft = function(turn) {
  this.score -= turn.totalScore();
  if (this.score === 0) { this.isWinner = true };
};
