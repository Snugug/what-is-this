var person = {
  first: 'Tyrion',
  last: 'Lannister',
  fullName: function (title) {
    title = title ? title : '';
    return title + this.first + ' ' + this.last
  }
};

var anotherPerson = {
  first: 'John',
  last: 'Snow'
};
