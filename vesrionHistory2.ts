// A simple TypeScript program to demonstrate basic functionality

// Function to add two numbers
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Function to greet a user
function greetUser(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

// Main execution
const num1 = 5;
const num2 = 10;
console.log(`The sum of ${num1} and ${num2} is: ${addNumbers(num1, num2)}`);

const userName = "Surya";
console.log(greetUser(userName));