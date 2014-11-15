function Dart(){
  this.isThrown = false
  this.score = 0
  this.isA = ''
};

Dart.prototype.Throw = function(points, place) {
  this.isThrown = true
  if (place === 1) {
    if(points === 25){
      this.isA = 'Outer bullseye'
    }else{this.isA = 'Single'}
  }
  if (place === 2) {
    if(points === 25){
      this.isA = 'Bullseye'
    }else{this.isA = 'Double'}
  }
  if (place === 3) {this.isA = 'Treble'}
  return this.score = points * place
};

Dart.prototype.isLastThrowDouble = function(turn) {
  var dartArray = turn.darts
  var lastDart = dartArray[dartArray.length-1]
  if (this.isA === 2) {return true}
  if (this.isA === 1 || this.isA === 3) {
    return false}
};
