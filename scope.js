function outerFunc(a) {
  var outerFuncVariable = "Hi there, I am outer " + a;

  console.log(outerFuncVariable); // Hi there, I am inner function variable

  function innerFunc() {
    var innerFuncVariable = "Hi there, I am inner " + a;
    console.log(innerFuncVariable);
  }
var a;
var b;
  innerFunc(); // Hi there, I am inner function variable

  console.log(innerFuncVariable); // undefined

}

outerFunc("function variable");
