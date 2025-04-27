import * as crypto from "crypto"; // Snyk Warning: Potential use of weak cryptographic algorithms
import { exec } from "child_process";
import * as vm from "vm";

// syncSecurity.ts
/**
 * This file demonstrates potential Snyk security warnings in TypeScript code.
 * The examples below are intentionally vulnerable to highlight common issues.
 */

// Example 1: Hardcoded sensitive information
const apiKey = "12345-ABCDE"; // Snyk Warning: Hardcoded credentials

// Example 2: Use of outdated or vulnerable library

function insecureHash(data: string): string {
    // MD5 is considered insecure
    const hash = crypto.createHash("md5"); // Snyk Warning: Weak hashing algorithm
    hash.update(data);
    return hash.digest("hex");
}

// Example 3: Command injection vulnerability

function executeCommand(userInput: string): void {
    exec(`ls ${userInput}`, (error, stdout, stderr) => { // Snyk Warning: Command injection
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        console.log(`Output: ${stdout}`);
    });
}

// Example 4: Prototype pollution vulnerability
const userInput = '{"__proto__": {"admin": true}}';
const parsedInput = JSON.parse(userInput); // Snyk Warning: Prototype pollution risk

console.log(parsedInput.admin); // May lead to unexpected behavior

// Example 5: Insecure deserialization

function insecureDeserialize(serializedCode: string): void {
    vm.runInNewContext(serializedCode); // Snyk Warning: Insecure deserialization
}

// Usage examples
console.log(insecureHash("example"));
executeCommand(";");
insecureDeserialize('console.log("This is insecure");');
