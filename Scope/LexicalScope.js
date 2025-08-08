// JavaScript uses lexical scoping (also referred
// to as static scoping) which means that the
// value of a variable is defined by its position
// when it’s created, not when it’s called.

const variableOne = 1;

function outerFunction() {
  const variableTwo = 2;
  console.log(variableOne); // logs 1

  function innerFunction() {
    console.log(variableOne, variableTwo); // logs 1, 2
  }

  innerFunction(); // calls innerFunction
}

outerFunction(); // calls outerFunction
