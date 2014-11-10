describe ('Player', function(){

	beforeEach(function(){
		player = new Player();
		turn = new Turn();
		dart = new Dart();
	});

		it ('should have an initial score of 501 points', function(){
			expect(player.score).toEqual(501)
		});

		it ('should allow to add turns', function(){
			player.addTurn(turn)
			expect(player.turns.length).toEqual(1)
		});

		it ('should know the points left to play', function(){
			turn.addDart(dart)
      dart.Throw(2, 2)
      turn.addDart(dart)
      dart.Throw(2, 2)
      turn.addDart(dart)
      dart.Throw(2, 2)
			player.addTurn(turn)
			expect(player.pointsLeft(turn)).toEqual(489)
		});

});