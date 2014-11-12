describe ('Player', function(){

	beforeEach(function(){
    player = new Player()
    player2 = new Player()
    turn = new Turn()
    turn2 = new Turn()
    dart1 = new Dart()
    dart2 = new Dart()
    dart3 = new Dart()
    dart1b = new Dart()
    dart2b = new Dart()
    dart3b = new Dart()
	});

		it ('should have an initial score of 101 points', function(){
			expect(player.score).toEqual(101)
		});

		it ('should allow to add turns', function(){
			player.addTurn(turn)
			expect(player.turns.length).toEqual(1)
		});

		it ('should know the points left to play', function(){
      makeATurn(turn2)
      player2.pointsLeft(turn2)
			expect(player2.score).toEqual(76)
		});

		it ('should know when it wins', function(){
      makeScoreToZeroInATurn(turn)
			player.pointsLeft(turn)
			expect(player.score).toEqual(0)
			expect(player.isWinner).toEqual(true)
		});

});