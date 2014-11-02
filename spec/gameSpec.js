describe ('Board', function(){

		
		beforeEach(function(){
			board = new Board;
			player = new Player;
		});

	describe ('The board has:', function(){

		it ('numbers starting from 1', function(){
			expect(board.numbers[0]).toEqual(1)
		});

		it ('numbers until 20', function(){
			expect(board.numbers.length).toEqual(20)
		});

	});

	describe ('The Player:', function(){

		it ('can hit a single', function(){
			player.hitSingle(4)
			expect(player.score).toEqual(497)
		});

		it ('can hit a double', function(){
			player.hitDouble(6)
			expect(player.score).toEqual(489)
		});

		it ('can hit a treble', function(){
			player.hitTreble(5)
			expect(player.score).toEqual(486)
		});

		it ('has thrown one dart', function(){
			player.hitSingle(2)
			expect(player.darts).toEqual(2)
		});

		it ('has thrown two darts', function(){
			player.hitSingle(2)
			player.hitTreble(16)
			expect(player.darts).toEqual(1)
		});

		it ('has thrown three darts', function(){
			player.hitSingle(2)
			player.hitTreble(16)
			player.hitTreble(14)
			expect(player.darts).toEqual(0)
		});

		it ('has the score not changing if tries to throw a fourth time', function(){
			player.hitSingle(2)
			player.hitSingle(16)
			player.hitSingle(14)
			player.hitDouble(7)
			expect(player.score).toEqual(469)
		});


	});
});