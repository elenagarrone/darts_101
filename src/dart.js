function Dart(){
  this.isThrown = false
  this.score = 0
};

Dart.prototype.Throw = function(points, place) {
  this.isThrown = true
  return this.score = points * place
};

