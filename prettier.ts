// A simple TypeScript program to demonstrate basic syntax

// Define an interface
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// Create a class implementing the interface
class Student implements Person {
  constructor(public name: string, public age: number, public grade: string) {}

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  getGrade(): string {
    return `I am in grade ${this.grade}.`;
  }
}

// Instantiate the class
const student = new Student("Kiran", 20, "A");

// Use the class methods
console.log(student.greet());
console.log(student.getGrade());
