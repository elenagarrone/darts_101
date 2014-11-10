function Player(){
	this.score = 101
	this.turns = []
	this.isWinner = false
};

Player.prototype.addTurn = function(turn) {
	player.turns.push(turn)
};

Player.prototype.pointsLeft = function(turn) {
	return this.score -= turn.totalScore()
};

Player.prototype.win = function() {
	return this.isWinner = true
};

//create the Game with 2 player. player knows when he win and when it's his turn. 