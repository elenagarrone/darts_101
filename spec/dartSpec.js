describe('Dart', function(){

    beforeEach(function(){
      dart = new Dart()
    });

        it ('should not be thrown when initialized', function(){
          expect(dart.isThrown).toBe(false)
        }); 

        it ("should be thrown after it has been thrown", function (){
          dart.Throw(12, 1)
          expect(dart.isThrown).toBe(true)
        });

      describe('should throw a dart and know the score if it hit:', function(){

        it ('a single', function(){
          dart.Throw(15, 1)
          expect(dart.score).toEqual(15)
        });

        it ('a double', function(){
          dart.Throw(3, 2)
          expect(dart.score).toEqual(6)
        });

        it ('a treble', function(){
          dart.Throw(3, 3)
          expect(dart.score).toEqual(9)
        });
        
        it ('the outer bullseye', function(){
          dart.Throw(25, 1)
          expect(dart.score).toEqual(25)
        });

        it ('the bullseye', function(){
          dart.Throw(25, 2)
          expect(dart.score).toEqual(50)
        });
      });

});