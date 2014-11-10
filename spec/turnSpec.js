describe('Turn', function(){

    beforeEach(function(){
      turn = new Turn();
      dart = new Dart();
    });

  it ('should hold the number of darts thrown in the turn', function(){
    expect(turn.darts.length).toEqual(0)
  });

  it ('should allow to add darts', function(){
    turn.addDart(dart)
    expect(turn.darts.length).toEqual(1)
  });


});