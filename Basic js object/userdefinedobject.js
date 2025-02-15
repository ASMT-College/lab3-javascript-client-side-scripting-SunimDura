// 1. Using Object Literal
let person = {
    name: "Alice",
    age: 28,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// 2. Using Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.displayInfo = function() {
        console.log(`Car: ${this.brand} ${this.model}`);
    };
}

let myCar = new Car("Tesla", "Model S");

// 3. Using Class (ES6)
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

let dog = new Animal("Dog", "Woof");

// Using all objects
person.greet();  // Output: Hello, my name is Alice
myCar.displayInfo();  // Output: Car: Tesla Model S
dog.makeSound();  // Output: Dog says Woof
