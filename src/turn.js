function Turn(){
  this.darts = []
};

Turn.prototype.addDart = function(dart) {
  if (this.darts.length >= 3) throw('You can add a maximum of three darts for each turn')
  this.darts.push(dart)
};

Turn.prototype.totalScore = function() {
    if (this.darts.length < 3 ) {throw('You have to throw 3 darts before requiring the total score');
  } else {return (this.darts[0].score + this.darts[1].score + this.darts[2].score);
  }; 
};