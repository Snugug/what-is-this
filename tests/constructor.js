describe('constructor `this` context', function () {
  it('should inherit from `this` if the constructor doesn\'t have a return', function (done) {
    s.a.should.equal(37);
    done();
  });

  it('should inherit from the return if the constructor has a return', function (done) {
    t.a.should.equal(52);
    done();
  });
});
