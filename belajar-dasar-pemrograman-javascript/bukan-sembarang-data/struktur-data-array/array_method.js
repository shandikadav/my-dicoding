const myArray = ["Android", "Data Science", "Web"];
myArray.reverse();
console.log(myArray); // Output: [ 'Web', 'Data Science', 'Android' ]

myArray[0] = "Web Programming";
myArray[1] = "Data Science";
myArray[2] = "Android";

console.log(myArray); // Output: [ 'Web Programming', 'Data Science', 'Android' ]
myArray.sort();
console.log(myArray); // Output: [ 'Android', 'Data Science', 'Web Programming' ]
