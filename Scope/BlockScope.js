// When ES6 was introduced it brought with it new
// ways to declare variables with let and const.
// Unlike var, both let and const can be scoped to
// the nearest pair of curly braces. In the
// following example you’ll see that variables set
// using var can be used out of the block, meaning
// that var is not block scoped.

{
  var person = "aman";
  const dog = "Tommy";
}

console.log(person);
// console.log(dog); // ReferenceError: dog is not defined
