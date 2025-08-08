var fruit = "apple";

console.log(fruit);

function pickFruit() {
  console.log(fruit);
}

pickFruit();

console.log(fruit);

function pickFruit() {
  fruit = "orange";
}

// A variable that is declared outside of a
// function is global, therefore it has global
// scope. This variable is available anywhere in
//  the application and can be accessed by any
// other JavaScript running on the page.
