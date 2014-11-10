function Turn(){
  this.darts = []
};

Turn.prototype.addDart = function() {
  if (this.darts.length >= 3) throw('You can add a maximum of three darts for each turn')
  this.darts.push(dart)
};

