describe ('Game', function(){

		
		beforeEach(function(){
			board = new Board;
			game = new Game;
		});

	describe ('The board has:', function(){

		it ('numbers starting from 1', function(){
			expect(board.numbers[0]).toEqual(1)
		});

		it ('numbers until 20', function(){
			expect(board.numbers.length).toEqual(20)
		});

	});

	describe ('The Game:', function(){

		it ('hit a single', function(){
			game.hitSingle(4)
			expect(game.score).toEqual(497)
		});

		it ('hit a double', function(){
			game.hitDouble(6)
			expect(game.score).toEqual(489)
		});

		it ('hit a treble', function(){
			game.hitTreble(5)
			expect(game.score).toEqual(486)
		});

		it ('hit the outer bullseye', function(){
			game.hitOuterBullsEye()
			expect(game.score).toEqual(476)
		});

		it ('hit the bullseye', function(){
			game.hitBullsEye()
			expect(game.score).toEqual(451)
		});

		it ('has thrown one dart', function(){
			game.hitSingle(2)
			expect(game.darts).toEqual(2)
		});

		it ('has thrown two darts', function(){
			game.hitSingle(2)
			game.hitTreble(16)
			expect(game.darts).toEqual(1)
		});

		it ('has thrown three darts', function(){
			game.hitSingle(2)
			game.hitTreble(16)
			game.hitTreble(14)
			expect(game.darts).toEqual(0)
		});

		it ("didn't hit anything", function(){
			game.hitNothing()
			expect(game.score).toEqual(501)
			game.hitSingle(12)
			expect(game.score).toEqual(489)
			game.hitNothing()
			expect(game.score).toEqual(489)
		});

		it ('has the score not changing if tries to throw a fourth time', function(){
			game.hitSingle(2)
			game.hitSingle(16)
			game.hitSingle(14)
			game.hitDouble(7)
			expect(game.score).toEqual(469)
		});

		it ('after throwing three times, a new turn of dards starts', function(){
			game.hitSingle(16)
			game.hitSingle(14)
			game.hitDouble(7)
			expect(game.darts).toEqual(0)	
			game.hitSingle(2)
			expect(game.darts).toEqual(3)			
		});

		xit ('has to hit as last a double to get to a score of 0', function(){
			game.hitTreble(20)
			game.hitTreble(20)
			game.hitTreble(20)
			game.hitTreble(20)
			game.hitTreble(20)
			game.hitTreble(20)
			game.hitTreble(20)
			game.hitTreble(20)
			game.hitSingle(1)
			game.hitDouble(10)
			expect(game.score).toEqual(0)
		});


	});
});