"use strict";
//! Question 1: Basic Types and Interfaces
// Create an interface called User with properties for id (number), name (string), email (string), and
// isActive (boolean). Then, create a function called createUser that takes a user object of type
// User and returns it. Finally, write code to create a new user and call the function.
function processInput(inputValue) {
    if (typeof inputValue == "number") {
        return `number : ${inputValue.toString()}`;
    }
    else {
        return `string : ${inputValue}`;
    }
}
console.log(processInput(2));
console.log(processInput("zakir"));
//! ********************************************************************
//# sourceMappingURL=app.js.map