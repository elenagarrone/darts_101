describe('Dart', function(){

  beforeEach(function(){
    dart = new Dart()
  });

  it ('should not be thrown when initialized', function(){
    expect(dart.isThrown).toBe(false)
  });

  it ("should be thrown after it has been thrown", function (){
    dart.throw(12, 1)
    expect(dart.isThrown).toBe(true)
  });

  it ('knows if the last throw is a double', function(){
    makeATurn(turn2)
    expect(dart.isLastThrowDouble(turn2)).toBe(true)
  });

  describe('should throw a dart and know the score if it hit:', function(){

    it ('a single', function(){
      dart.throw(15, 1)
      expect(dart.score).toEqual(15)
    });

    it ('a double', function(){
      dart.throw(3, 2)
      expect(dart.score).toEqual(6)
    });

    it ('a treble', function(){
      dart.throw(3, 3)
      expect(dart.score).toEqual(9)
    });

    it ('the outer bullseye', function(){
      dart.throw(25, 1)
      expect(dart.score).toEqual(25)
    });

    it ('the bullseye', function(){
      dart.throw(25, 2)
      expect(dart.score).toEqual(50)
    });

  });

  describe("should know if it's a: ", function(){

    it ('single', function(){
      dart.throw(1, 1)
      expect(dart.isA).toBe('Single');
    });

    it ('double', function(){
      dart.throw(1, 2)
      expect(dart.isA).toBe('Double');
    });

    it ('treble', function(){
      dart.throw(1, 3)
      expect(dart.isA).toBe('Treble');
    });

    it ('outer bullseye', function(){
      dart.throw(25, 1)
      expect(dart.isA).toBe('Outer bullseye');
    });

    it ('outer bullseye', function(){
      dart.throw(25, 2)
      expect(dart.isA).toBe('Bullseye');
    });

  });

});
