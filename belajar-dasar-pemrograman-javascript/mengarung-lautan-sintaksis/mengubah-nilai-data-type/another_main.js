const cm = "20cm";
const px = "64px";

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // Output: 20
console.log(intFromPX); // Output: 64

const cm2 = "20.55cm";
const px2 = "64.23px";

const floatFromCM = parseFloat(cm2);
const floatFromPX = parseFloat(px2);

console.log(floatFromCM); // Output: 20.55
console.log(floatFromPX); // Output: 64.23

const number = 123;
const string = "Dicoding";
const empty = null;

const boolFromNumber = Boolean(number);
const boolFromString = Boolean(string);
const boolFromEmpty = Boolean(empty);

console.log(boolFromNumber); // Output: true
console.log(boolFromString); // Output: true
console.log(boolFromEmpty); // Output: false
