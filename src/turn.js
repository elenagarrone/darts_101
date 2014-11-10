function Turn(){
  this.darts = []
};

Turn.prototype.addDart = function() {
  if (this.darts.length >= 3) throw('You can add a maximum of three darts for each turn')
  this.darts.push(dart)
};

Turn.prototype.totalScore = function(turn) {
    if (this.darts.length < 3 ) {throw('You have to throw 3 darts before requiring the total score');
  } else {return this._dartScore(1) + this._dartScore(2) + this._dartScore(3);
  }; 
};

Turn.prototype._dartScore = function(i) {
  for (i = 0; i <= this.darts.length; i++) {
    return this.darts[i+1].score 
  }
};