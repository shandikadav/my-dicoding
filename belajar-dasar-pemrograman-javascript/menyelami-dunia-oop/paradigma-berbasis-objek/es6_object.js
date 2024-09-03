class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// membuat instance dari Person
const person1 = new Person("Shandika", 21);
const person2 = new Person("Guido", 21);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();

console.log(typeof Person); // function
