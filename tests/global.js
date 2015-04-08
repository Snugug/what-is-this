describe('global `this` context', function () {
  it('should be the `window` (in a browser)', function (done) {
    expect(_this).to.equal(window);
    done();
  });

  it('should have a `document` property equal to the browser\'s document', function (done) {
    _this.document.should.equal(document);
    done();
  });

  it('should set properties on the `window`', function (done) {
    _this.a = 42;
    window.a.should.equal(42);
    done();
  });
});
