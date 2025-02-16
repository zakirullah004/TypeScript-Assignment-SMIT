//! Question 1: Basic Types and Interfaces
// Create an interface called User with properties for id (number), name (string), email (string), and
// isActive (boolean). Then, create a function called createUser that takes a user object of type
// User and returns it. Finally, write code to create a new user and call the function.

// *********************************************************!
// interface User {
//     name : string,
//     id : number,
//     emial : string,
//     isActive : boolean,
// }

// function createUser(user : User){
//     return user
// }

// let newUSer:User = {
//     name : "zakir",
//     id : 101,
//     emial : "ab@12",
//     isActive :true
// }

// const createdUser = createUser(newUSer)

// console.log(createdUser);


// *********************************************************!




//? Question 2: Union Types and Type Guards
// Create a type called Input that can be either a number or a string. Then write a function called
// processInput that takes an argument of type Input and returns a string. If the input is a number,
// convert it to a string and prepend &quot;Number: &quot; to it. If the input is already a string, prepend
// &quot;String: &quot; to it. Use type guards to check the type of input.

//! ********************************************************************

type Input = string | number;

function processInput(inputValue:Input) : string {
    if(typeof inputValue == "number"){
        return `number : ${inputValue.toString()}`
    }else{
        return `string : ${inputValue}`
    }
}

console.log( processInput(2));
console.log( processInput("zakir"));


//! ********************************************************************