describe('Turn', function(){

    beforeEach(function(){
      turn = new Turn();
    });

  it ('should hold the number of darts thrown in the turn', function(){
    expect(turn.darts.length).toEqual(0)
  });


});