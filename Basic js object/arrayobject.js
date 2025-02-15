// 1️ Different Ways to Define an Array Object
let arr1 = [10, 20, 30, 40, 50]; // Using array literal
let arr2 = new Array(60, 70, 80, 90); // Using Array constructor
let arr3 = []; // Empty array, adding values later
arr3[0] = 100;
arr3[1] = 200;
let arr4 = Array.of(1, 2, 3, 4, 5); // Using Array.of()
let arr5 = Array.from("HELLO"); // Using Array.from()

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Array 3:", arr3);
console.log("Array 4:", arr4);
console.log("Array 5:", arr5);

console.log("\n");

// 2️ Array Properties
console.log("🔹 Array Properties:");
console.log("Array Length:", arr1.length); // Returns number of elements
console.log("Array Constructor:", arr1.constructor); // Returns the constructor function
console.log("Array is Array:", Array.isArray(arr1)); // Checks if arr1 is an array
console.log("First Element:", arr1[0]); // Access first element
console.log("Last Element:", arr1[arr1.length - 1]); // Access last element

console.log("\n");

// 3️ Adding and Removing Elements
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange"); // Adds at the end
fruits.unshift("Pineapple"); // Adds at the beginning
console.log("After push & unshift:", fruits);

fruits.pop(); // Removes last element
fruits.shift(); // Removes first element
console.log("After pop & shift:", fruits);

console.log("\n");

// 4️ Finding Elements
console.log("🔹 Finding Elements:");
console.log("Index of 'Mango':", fruits.indexOf("Mango"));
console.log("Includes 'Banana'?", fruits.includes("Banana"));

console.log("\n");

// 5️ Extracting and Modifying Arrays
let numbers = [10, 20, 30, 40, 50];
let slicedArray = numbers.slice(1, 4); // Extracts index 1 to 3
console.log("Sliced Array:", slicedArray);

numbers.splice(2, 1, 100); // Replaces 1 element at index 2
console.log("Array after splice:", numbers);

console.log("\n");

// 6️ Sorting and Reversing Arrays
let names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log("Sorted Names:", names);
names.reverse();
console.log("Reversed Names:", names);

console.log("\n");

// 7️ Looping through Arrays
console.log("🔹 Looping through Arrays:");
let cities = ["New York", "London", "Paris"];
cities.forEach((city, index) => console.log(`City ${index + 1}: ${city}`));

console.log("\n");

// 8️ Transforming Arrays using map()
let numbers2 = [1, 2, 3, 4, 5];
let squaredNumbers = numbers2.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

console.log("\n");

// 9️ Filtering Arrays using filter()
let ages = [10, 18, 22, 16, 25, 30];
let adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);

console.log("\n");

//  Reducing an Array using reduce()
let prices = [10, 20, 30, 40];
let totalPrice = prices.reduce((sum, price) => sum + price, 0);
console.log("Total Price:", totalPrice);

console.log("\n");

// 1️1️ More Array Properties
console.log("🔹 More Array Properties:");
console.log("Array Prototype:", Array.prototype); // Access Array prototype object
console.log("Array Keys:", Object.keys(arr1)); // Returns array indexes as keys
console.log("Array Values:", Object.values(arr1)); // Returns array values
console.log("Array Entries:", Object.entries(arr1)); // Returns index-value pairs

console.log("\n");

// 1️2️ Converting Arrays to Strings
console.log("🔹 Converting Arrays to Strings:");
let words = ["Hello", "World", "JavaScript"];
console.log("Join Method:", words.join(" - ")); // Converts array to string
console.log("ToString Method:", words.toString()); // Converts array to string
