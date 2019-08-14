//base class Vehical. with mode and year properties, and accelarate method 
class Vehical {
  constructor(model, year) {
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  Accelarate() {
    this.speed += 100;
    console.log("speed " + this.speed);
  }
}

//derive from Vehical, and add properties.
class Car extends Vehical {
  constructor(manufacturer, model, year) {
    super(model, year);
    this.manufacturer = manufacturer;
  }

  static HasFourWheels() {
    return true;
  }
}

let car = new Car("toyota", "camry", "2019");
car.Accelarate();
console.log(car);
console.log(Car.HasFourWheels());

console.log(Car.prototype);

console.log(Object.getPrototypeOf(Car));
console.log(Object.getPrototypeOf(Vehical));

console.log(car.__proto__);

const corrola = Object.assign({}, car, { hasCamera: true });
console.log(corrola);

console.log(Vehical.hasOwnProperty("model"));
