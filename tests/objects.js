describe('object `this` context', function () {
  it('should be equal to the object when called from a function', function (done) {
    o.f().should.equal(37);
    done();
  });

  it('should be equal to the object when the function is added after object declaration', function (done) {
    p.f().should.equal(42);
    done();
  });

  it('should reference the most immediate member', function (done) {
    o.prop.should.equal(37);
    o.f().should.equal(37);
    o.b.prop.should.equal(54);
    o.b.g().should.equal(54);
    done();
  });

  it('should reference items in an object\'s prototype chain', function (done) {
    q1.f().should.equal(5);
    done();
  });
});
