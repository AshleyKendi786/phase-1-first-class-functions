 // 1. Function that receives and calls a callback
function receivesAFunction(callback) {
  callback(); // Just call the passed-in function
}

// 2. Function that returns a named function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function!");
  };
}

// 3. Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}
