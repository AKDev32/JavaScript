const variableOne = 1;

function outerFunction() {
  const variableTwo = 2;
  console.log(variableOne);

  function innnerFunction() {
    console.log(variableOne, variableTwo);
  }

  innnerFunction();
}

outerFunction();

// Scope is the context within which variables and
// functions are accessible. There are several
// different types of scope in JavaScript: global,
//  local, block and lexical.
