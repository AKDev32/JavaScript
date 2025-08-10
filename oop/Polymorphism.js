class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("Animal speaks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow! I am " + this.name);
  }

  climb() {
    console.log(this.name + " is climbing a tree.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(`Woof! I am ${this.name}`);
  }

  fetch() {
    console.log(this.name + " is fetching the ball.");
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

makeAnimalSpeak(new Cat("Whiskers"));
makeAnimalSpeak(new Dog("Buddy"));
