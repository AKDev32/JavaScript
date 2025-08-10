class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

let animal = new Animal("Dog");
animal.speak(); // logs "Dog makes a noise."
