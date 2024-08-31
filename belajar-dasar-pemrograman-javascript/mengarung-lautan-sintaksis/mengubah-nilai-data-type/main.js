const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = String(boolean);

console.log(strNumber); // Output: "123"
console.log(strBoolean); // Output: "true"

const strNumber2 = "123";
const strFloat = "3.14";
const boolean2 = true;
const numFromString = Number(strNumber2);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean2);

console.log(numFromString); // Output: 123
console.log(floatFromString); // Output: 3.14
console.log(numFromBoolean); // Output: 1
