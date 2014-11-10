function Dart(){
  this.isThrown = false
  this.score = 0
};

Dart.prototype.Throw = function(points, place) {
  this.score = points * place
  this.isThrown = true
};

