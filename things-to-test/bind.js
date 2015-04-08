var bindFunc = function bindFunc () {
  return this.a;
};

//////////////////////////////
// Bound function
//////////////////////////////
var boundFunc = bindFunc.bind({
  a: 'things and stuff'
});

//////////////////////////////
// Still bound
//////////////////////////////
var boundFuncObj = {
  a: 37,
  f: bindFunc,
  g: boundFunc
};
