// 1️⃣ Different Ways to Define a String Object
let str1 = "Hello, World!"; // String literal
let str2 = 'JavaScript'; // String literal
let str3 = `Template String`; // Template string
let str4 = new String("Hello with Object"); // String object

console.log("String 1:", str1);
console.log("String 2:", str2);
console.log("String 3:", str3);
console.log("String 4:", str4);

console.log("\n");

// 2️⃣ String Properties
console.log("🔹 String Properties:");
console.log("Length of str1:", str1.length); // Returns the number of characters
console.log("Constructor of str1:", str1.constructor); // Returns the constructor function
console.log("Is str1 a string object?", str4 instanceof String); // Checks if it's an instance of String

console.log("\n");

// 3️⃣ String Methods
console.log("🔹 String Methods:");
console.log("Character at index 1 in str1:", str1.charAt(1)); // Returns character at index 1
console.log("Concatenation of str1 and str2:", str1.concat(" ", str2)); // Concatenates two strings
console.log("Index of 'World' in str1:", str1.indexOf("World")); // Returns index of substring
console.log("Does str1 include 'World'? ", str1.includes("World")); // Checks if substring exists
console.log("str1 in uppercase:", str1.toUpperCase()); // Converts string to uppercase
console.log("str1 in lowercase:", str1.toLowerCase()); // Converts string to lowercase
console.log("Slice of str1 (index 0 to 5):", str1.slice(0, 5)); // Extracts a portion of the string
console.log("Replacing 'World' with 'JavaScript':", str1.replace("World", "JavaScript")); // Replaces part of the string
console.log("Split str1 into words:", str1.split(" ")); // Splits the string into an array of words
console.log("Trimmed string:", "  Hello  ".trim()); // Removes whitespace from both ends

console.log("\n");

// 4️⃣ String Methods with Template Literals
let name = "John";
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("Template Literal String:", greeting); // Uses template literals for string interpolation
