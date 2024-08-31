const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}`;

console.log(text);

const result = 50 / 0;
console.log(result); // Infinity

const result2 = Number("Dicoding");
console.log(result2); // NaN

const completed = true;
const passed = false;

console.log(completed, passed); // true false

const isGreater = 5 > 2;

console.log(isGreater); // true

let message = null;
console.log(message); // null

let message2;
console.log(message2); // undefined

const name1 = { firstName: "Dicoding", lastName: null };
const name2 = { firstName: "Dicoding", lastName: undefined };

console.log(JSON.stringify(name1));
console.log(JSON.stringify(name2));
