describe ('Game', function(){

  beforeEach(function(){
    game = new Game()
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

  it ('should know how many player there are', function(){
    expect(game.players.length).toEqual(0)
  });

  it ('can add players', function(){
    game.addPlayer(player)
    expect(game.players.length).toEqual(1)
  });

  it ('can add a maximum of two player', function(){
    game.addPlayer(player)
    game.addPlayer(player2)
    expect(function(){game.addPlayer(player)}).toThrow("Sorry, the game cannot have more than two players")
  });

  it ('knows who is the winner between the two players', function(){
      dart1.Throw(25, 2)
      turn.addDart(dart1)
      dart2.Throw(11, 1)
      turn.addDart(dart2)
      dart3.Throw(20, 2)
      turn.addDart(dart3)
      player.addTurn(turn)
      player.pointsLeft(turn)
      dart1b.Throw(3, 2)
      turn2.addDart(dart1b)
      dart2b.Throw(11, 1)
      turn2.addDart(dart2b)
      dart3b.Throw(4, 2)
      turn2.addDart(dart3b)
      player2.addTurn(turn2)
      player2.pointsLeft(turn2)
      expect(game.winner(player, player2)).toEqual('Player1 is the winner')
  });

});