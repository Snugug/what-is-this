//////////////////////////////
// Basic Object
//////////////////////////////
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  }
};

//////////////////////////////
// Object with function declared elsewhere
//////////////////////////////
var p = {
  prop: 42
};

var id = function id () {
  return this.prop;
};

p.f = id;

//////////////////////////////
// Most immediate reference
//////////////////////////////
o.b = {
  g: id,
  prop: 54
};

//////////////////////////////
// Chaining
//////////////////////////////
var q = {
  f: function () {
    return this.a + this.b
  }
};

var q1 = Object.create(q);

q1.a = 1;
q1.b = 4;
