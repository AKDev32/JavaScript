class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog("Rex");
dog.speak(); // logs "Rex barks."
let animal = new Animal("Cat");
animal.speak(); // logs "Cat makes a noise."
