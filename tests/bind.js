describe('bind `this` context', function () {
  it('should be the object passed in to `bind`', function (done) {
    boundFunc().should.equal('things and stuff');
    done();
  });

  it('should stay bound even in a new context', function (done) {
    boundFuncObj.a.should.equal(37);
    boundFuncObj.f().should.equal(37);
    boundFuncObj.g().should.equal('things and stuff');
    done();
  });
});
