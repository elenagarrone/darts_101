describe ('Game', function(){

	beforeEach(function(){
		game = new Game();
		turn = new Turn();
		dart = new Dart();
	});

		it ('should have an initial score of 501 points', function(){
			expect(game.score).toEqual(501)
		});

		it ('should allow to add turns', function(){
			game.addTurn(turn)
			expect(game.turns.length).toEqual(1)
		});

		it ('should know the points left to play', function(){
			turn.addDart(dart)
      dart.Throw(2, 2)
      turn.addDart(dart)
      dart.Throw(2, 2)
      turn.addDart(dart)
      dart.Throw(2, 2)
			game.addTurn(turn)
			expect(game.pointsLeft(turn)).toEqual(489)
		});

});