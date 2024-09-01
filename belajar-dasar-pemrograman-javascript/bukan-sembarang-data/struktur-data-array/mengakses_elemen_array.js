// mengakses elemen array
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[1]); // 42.5

// manipulasi nilai array menggunakan indexing
myArray[1] = "JavaScript";
console.log(myArray); // Output: [ 'Cokelat', 'JavaScript', 22, true, 'Programming' ]

// menambah nilai array menggunakan push
myArray.push("Python");
console.log(myArray); // Output: [ 'Cokelat', 'JavaScript', 22, true, 'Programming', 'Python' ]

// menghapus element dan data array
delete myArray[2];
console.log(myArray); // Output: [ 'Cokelat', 'JavaScript', <1 empty item>, true, 'Programming', 'Python' ]

// menghapus element array dengan splice
myArray.splice(2, 1);
console.log(myArray); // Output: [ 'Cokelat', 'JavaScript', true, 'Programming', 'Python' ]
