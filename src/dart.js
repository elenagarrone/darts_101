function Dart(){
  this.isThrown = false
};

Dart.prototype.Throw = function() {
  this.isThrown = true
};