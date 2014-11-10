function Game(){
	this.score = 501
	this.turns = []
};

Game.prototype.addTurn = function(turn) {
	game.turns.push(turn)
};

Game.prototype.pointsLeft = function(turn) {
	return this.score -= turn.totalScore()
};

