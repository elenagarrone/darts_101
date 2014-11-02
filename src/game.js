function Board(){
	this.numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
};

function Player(){
	this.score = 501
	this.darts = 3
};


Player.prototype.hitSingle = function(number) {
	if (this.darts >= 1) {this.darts -= 1; return this.score -= (number)} else {this._newTurn(); return this.score} 
};

Player.prototype.hitDouble = function(number){
	if (this.darts >= 1) {this.darts -= 1; return this.score -= (number * 2)} else {this._newTurn(); return this.score}
};

Player.prototype.hitTreble = function(number){
	if (this.darts >= 1) {this.darts -= 1; return this.score -= (number * 3)} else {this._newTurn(); return this.score}
};

Player.prototype.hitNothing = function(){
	if (this.darts >= 1) {this.darts -= 1; return this.score} else {	this._newTurn(); return this.score}
};

Player.prototype._newTurn = function() {
	return this.darts = 3
};