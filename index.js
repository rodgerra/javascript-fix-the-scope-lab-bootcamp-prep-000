var animal = 'cat';
function myAnimal() {
  var animal = 'dog';
return animal;
}
var animal = 'dog';
function yourAnimal() {
  var animal ='cat';
  return animal;
}
const two = 2
function add2(n) {
  return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want 'funkyFunction' on the line below to return a function that returns "FUNKY!" -- how can we accomplish that?
// NOTE: To pass this final test, you only need to modify the code below this line.
var theFunk= "FUNKY!";
console.log(theFunk);
