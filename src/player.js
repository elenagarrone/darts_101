function Player(){
	this.score = 101
	this.turns = []
};

Player.prototype.addTurn = function(turn) {
	player.turns.push(turn)
};

Player.prototype.pointsLeft = function(turn) {
	return this.score -= turn.totalScore()
};

Player.prototype.isWinner = function() {
	if (this.score = 0){ return true}
};

