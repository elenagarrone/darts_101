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

    it ('should hold not more than 3 darts', function(){
      turn.addDart(dart)
      turn.addDart(dart)
      turn.addDart(dart)
      expect(function(){turn.addDart(dart)}).toThrow('You can add a maximum of three darts for each turn')
    });

    // it ('should know the total score of the darts', function(){
    //   expect(turn.score()).toEqual(0)
    // });


});