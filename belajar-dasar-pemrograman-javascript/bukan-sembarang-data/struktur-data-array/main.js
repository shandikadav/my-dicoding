//membuat array menggunakan object constructor
const users = new Array();
console.log(users); // Output: []

//membuat array menggunakan array.from
const foo = Array.from("foo");
console.log(foo); // Output: [ 'f', 'o', 'o' ]

// contoh penggunaan array.from
const pengguna = new Array("Jack", "Sparrow", "Barbossa");
const customer = Array.from(pengguna);
console.log(customer); // Output: [ 'Jack', 'Sparrow', 'Barbossa' ]

// membuat array menggunakan array literal
const fruits = ["Apple", "Banana", "Cherry", "", "Watermelon"];
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry', '', 'Watermelon' ]
