// spread operator pada object
const obj1 = { name: "Dicoding" };
const obj2 = { lastName: "Indonesia", address: "Jl. Batik Kumeli No 50" };
const newObj = { ...obj1, ...obj2 };

console.log(newObj);

const originalObj = {
  name: "Dicoding",
  address: "Jl. Arnold Mononutu No. 18",
  age: 5,
};

const copiedObj = { ...originalObj };

console.log(copiedObj);

// spread operator pada array
const array1 = ["Dicoding"];
const array2 = ["Indonesia", "Jl. Batik Kumeli No 50"];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

const original = ["apple", "banana", "cherry"];
const copy = [...original];

console.log(copy); // Output: ['apple', 'banana', 'cherry']
