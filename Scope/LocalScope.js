// selectAnimal();

// console.log(animal);

// function selectAnimal() {
//   var animal = "zebra";
//   console.log(animal);
// }

// This code gives an error because the variable
// `animal` is not defined in the global scope.

var animal = "lion";

function selectAnimal() {
  var animal = "elephant";
  console.log(animal); // logs "elephant"
}

selectAnimal();

// This is sometimes referred to as function
// scope. Variables that are declared within a
// JavaScript function are local to that function,
//  therefore they have local scope. This means
// they can only be accessed from within that
// function.
