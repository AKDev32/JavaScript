function tryMe (param1, param2) {
    console.log(param1 + " " + param2);
}

// Define a function that takes a callback as an argument
function callbackTester(callback) {
  // Do some task
  console.log("Testing callback");
  // Invoke the callback function
  callback();
}
// Call the tester function and pass an anonymous function as a callback
callbackTester(function() {
  // Pass the arguments to the callback function inside the anonymous function
  tryMe("hello", "goodbye");
});
// The output will be:
// Testing callback
// hello and goodbye