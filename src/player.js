function Player(){
	this.score = 501
	this.turns = []
};

Player.prototype.addTurn = function(turn) {
	player.turns.push(turn)
};

Player.prototype.pointsLeft = function(turn) {
	return this.score -= turn.totalScore()
};

