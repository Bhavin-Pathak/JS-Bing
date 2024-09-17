console.log("Operators");

// Arithmetic Operators
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.3333333333333335
console.log(10 % 3); // 1

// Assignment Operators
let a = 10;
a += 3; // a = a + 3
console.log(a); // 13
a -= 3; // a = a - 3
console.log(a); // 10
a *= 3; // a = a * 3
console.log(a); // 30
a /= 3; // a = a / 3
console.log(a); // 10
a %= 3; // a = a % 3
console.log(a); // 1

// Comparison Operators
console.log(10 > 3); // true
console.log(10 < 3); // false
console.log(10 >= 3); // true
console.log(10 <= 3); // false
console.log(10 == 3); // false
console.log(10 === 3); // false
console.log(10 != 3); // true
console.log(10 !== 3); // true

// Logical Operators
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

// Ternary Operators
let result = 10 > 3 ? "Greater" : "Less";
console.log(result); // Greater

result = 10 < 3 ? "Greater" : "Less";
console.log(result); // Less

// Type Operators
console.log(typeof 10); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (null is an object in JavaScript)
console.log(typeof undefined); // undefined
console.log(typeof function () {}); // function
console.log(typeof [1, 2, 3]); // object (array is an object in JavaScript)
console.log(typeof { name: "John" }); // object

// Unary Operators
console.log(typeof ++a); // number
console.log(typeof a++); // number
console.log(typeof a--); // number
console.log(typeof --a); // number

console.log(typeof ++a + typeof a++); // "numbernumber"
console.log(typeof a-- + typeof --a); // "numbernumber"

// Bitwise Operators
console.log(10 & 3); // 2
console.log(10 | 3); // 11
console.log(10 ^ 3); // 7
console.log(~10); // -11
console.log(10 << 1); // 20
console.log(10 >> 1); // 5
console.log(10 >>> 1); // 5

// Equality Operators (== vs ===)
console.log(10 == "10"); // true
console.log(10 === "10"); // false

// String Concatenation Operator (+)
console.log("Hello" + " " + "World"); // Hello World
console.log(10 + 3); // 13
console.log(true + false); // 1
console.log(true + "World"); // trueWorld
console.log("Hello" + 3); // Hello3
console.log("Hello" + true); // Hello true
console.log("Hello" + false); // Hello false
