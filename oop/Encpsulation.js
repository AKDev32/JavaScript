class Car {
  constructor(brand) {
    this._brand = brand;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }
}

let myCar = new Car("Toyota");
console.log(myCar.brand); // logs "Toyota"
myCar.brand = "Honda";
console.log(myCar.brand); // logs "Honda"
