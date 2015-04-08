describe('function `this` context', function () {
  it('should be the `window` when defined globally', function (done) {
    expect(f1()).to.equal(window);
    done();
  });

  it('should be `undefined` when defined globally but used with `use strict`', function (done) {
    expect(f2()).to.equal(undefined);
    done();
  });
});
