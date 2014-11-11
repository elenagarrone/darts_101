describe ('Game', function(){

  beforeEach(function(){
    game = new Game()
    player = new Player()
  });

  it ('should know how many player there are', function(){
    expect(game.players.length).toEqual(0)
  });

  it ('can add players', function(){
    game.addPlayer(player)
    expect(game.players.length).toEqual(1)
  });

});