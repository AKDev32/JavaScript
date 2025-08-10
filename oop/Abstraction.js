class Vehicle {
  startEngine() {
    console.log("Engine started.");
  }

  stopEngine() {
    console.log("Engine stopped.");
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super();
    this.brand = brand;
  }

  honk() {
    console.log(`${this.brand} is honking!`);
  }
}

class Bike extends Vehicle {
  constructor(brand) {
    super();
    this.brand = brand;
  }

  ringBell() {
    console.log(`${this.brand} is ringing the bell!`);
  }
}

let myCar = new Car("Toyota");
myCar.startEngine(); // logs "Engine started."
myCar.honk(); // logs "Toyota is honking!"
let myBike = new Bike("Yamaha");
myBike.startEngine(); // logs "Engine started."
myBike.ringBell(); // logs "Yamaha is ringing the bell!"
myCar.stopEngine(); // logs "Engine stopped."
myBike.stopEngine(); // logs "Engine stopped."
console.log(myCar.brand); // logs "Honda"
myCar.brand = "Honda"; // logs "Honda"
console.log(myBike.brand); // logs "Yamaha"
myBike.brand = "Yamaha"; // logs "Yamaha"
console.log(myCar.brand); // logs "Honda"
console.log(myBike.brand); // logs "Yamaha"
