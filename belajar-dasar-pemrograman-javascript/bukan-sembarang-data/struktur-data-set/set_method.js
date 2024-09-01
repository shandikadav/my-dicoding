// set.add method
const set = new Set();
set.add(1);
set.add("Apple");
set.add(1);
set.add("Apple");

console.log(set); // Output: Set { 1, 'Apple' }

// mengakses nilai set menggunakan for loop
for (const number of set) {
  console.log(number);
}

// mengakses nilai set menggunakan forEach
set.forEach((value) => console.log(value));

// menghapus nilai di set
set.delete("Apple");
console.log(set); // Output: Set { 1 }
