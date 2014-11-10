describe('Dart', function(){

    beforeEach(function(){
      dart = new Dart()
    });

  it ('should not be thrown when initialized', function(){
    expect(dart.isThrown).toBe(false)
  }); 

  it ("should be thrown after it has been thrown", function (){
    dart.Throw()
    expect(dart.isThrown).toBe(true)
  });
  
});