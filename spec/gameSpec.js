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

  makeScoreToZeroInATurn = function(turn){
    dart1.throw(25, 2)
    turn.addDart(dart1)
    dart2.throw(11, 1)
    turn.addDart(dart2)
    dart3.throw(20, 2)
    turn.addDart(dart3)
    player.addTurn(turn)
  };

  makeATurn = function(turn2){
    dart1b.throw(3, 2)
    turn2.addDart(dart1b)
    dart2b.throw(11, 1)
    turn2.addDart(dart2b)
    dart3b.throw(4, 2)
    turn2.addDart(dart3b)
    player2.addTurn(turn2)
  };

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
    makeScoreToZeroInATurn(turn)
    makeATurn(turn2)
    expect(game.winner(player, player2)).toEqual('Player1 is the winner')
  });

});
