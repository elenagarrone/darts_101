describe ('Game', function(){

	beforeEach(function(){
		game = new Game();
		turn = new Turn();
	});

		it ('should have an initial score of 501 points', function(){
			expect(game.score).toEqual(501)
		});

		it ('should allow to add turns', function(){
			game.addTurn(turn)
			expect(game.turns.length).toEqual(1)
		});

});