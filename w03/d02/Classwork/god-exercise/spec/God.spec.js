describe('God', function(){
  it('should be a function', function() {
    expect(God).to.be.a('function');
  });

  describe('an instance of God', function() {
    var artemis = new God('Artemis');
    var diana   = new God('Diana', ['moon', 'bow', 'stag']);

    it('should be an instance of God', function() {
      expect(artemis instanceof God).to.be(true);
    });

    it('should have a name property', function() {
      expect(artemis.hasOwnProperty('name')).to.be(true);
    });

    it('should have the name it was given', function() {
      expect(artemis.name).to.be('Artemis');
    });

    describe('symbols property', function() {
      it('should be present', function() {
        expect(artemis.hasOwnProperty('symbols')).to.be(true);
      });

      it('should default to an empty array', function() {
        expect(Array.isArray(artemis.symbols)).to.be(true);
      });

      it('should be an array of symbols', function() {
        expect(Array.isArray(diana.symbols)).to.be(true);
      });
    });

    it('should have a greet method', function() {
      expect(!!artemis.greet).to.be(true);
      expect(artemis.hasOwnProperty('greet')).to.be(true);
    });
  });
});

describe('artemis', function() {
  it('should be an instance of God', function() {
    expect(artemis instanceof God).to.be(true);
  });
});

describe('diana', function() {
  it('should be an instance of God', function() {
    expect(diana instanceof God).to.be(true);
  });
});
