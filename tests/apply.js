describe('call/apply `this` context', function () {
  it('should change to the new object when using `apply`', function (done) {
    person.fullName().should.equal('Tyrion Lannister');
    person.fullName.apply(anotherPerson).should.equal('John Snow');
    person.fullName.apply(anotherPerson, ['Crow ']).should.equal('Crow John Snow');
    done();
  });

  it('should change to the new object when using `call`', function (done) {
    person.fullName().should.equal('Tyrion Lannister');
    person.fullName.call(anotherPerson, 'Crow ').should.equal('Crow John Snow');
    done();
  });
});
