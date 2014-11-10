function Game(){
	this.score = 501
	this.turns = []
};

Game.prototype.addTurn = function(turn) {
	game.turns.push(turn)
};