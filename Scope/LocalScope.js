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
