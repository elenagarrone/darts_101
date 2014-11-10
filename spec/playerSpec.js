describe ('Player', function(){

	beforeEach(function(){
		player = new Player();
		turn = new Turn();
		dart1 = new Dart();
		dart2 = new Dart();
		dart3 = new Dart();
	});

		it ('should have an initial score of 501 points', function(){
			expect(player.score).toEqual(101)
		});

		it ('should allow to add turns', function(){
			player.addTurn(turn)
			expect(player.turns.length).toEqual(1)
		});

		it ('should know the points left to play', function(){
      dart1.Throw(3, 2)
      turn.addDart(dart1)
      dart2.Throw(2, 2)
      turn.addDart(dart2)
      dart3.Throw(2, 2)
			turn.addDart(dart3)
			player.addTurn(turn)
			expect(player.pointsLeft(turn)).toEqual(87)
		});

		it ('should know when it wins', function(){
      dart1.Throw(25, 2)
      turn.addDart(dart1)
      dart2.Throw(11, 1)
      turn.addDart(dart2)
      dart3.Throw(20, 2)
			turn.addDart(dart3)
			player.addTurn(turn)
			player.pointsLeft(turn)
			expect(player.score).toEqual(0)
			player.win()
			expect(player.isWinner).toEqual(true)
		});

});