describe ('Board', function(){

		it ('numbers starting from 1', function(){
			board = new Board;
			expect(board.numbers[0]).toEqual(1)
		});

		it('numbers until 20', function(){
			board = new Board;
			expect(board.numbers.length).toEqual(20)
		});

		it('single scores', function(){
			board = new Board;
			player = new Player;
			player.hitSingle(4)
			expect(player.score).toEqual(497)
		});

});