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

// type Input = string | number;

// function processInput(inputValue:Input) : string {
//     if(typeof inputValue == "number"){
//         return `number : ${inputValue.toString()}`
//     }else{
//         return `string : ${inputValue}`
//     }
// }

// console.log( processInput(2));
// console.log( processInput("zakir"));


//! ********************************************************************4







//! ********************************************************************

//? Question 3: Classes and Inheritance
// Create a base class called Vehicle with properties for make (string), model (string), and year
// (number). Include a method called getInfo() that returns a string with the vehicle information.
// Then create two subclasses: Car and Motorcycle. The Car class should have an additional
// property for doors (number), and the Motorcycle class should have a property for hasSidecar
// (boolean). Override the getInfo() method in each subclass to include the additional information.


class Vehicle {
    make :string
    model : string
    year : number

    constructor(mk:string , md:string ,yr:number){
        this.make = mk,
        this.model = md,
        this.year = yr
    }

    getInfo(){
        return `make:${this.make}, model:${this.model}, year${this.year}`
    }
}

// let car = new Vehicle("Toyota","V8",2003)
// car.getInfo()

// // console.log(car);

class Car extends Vehicle { 
    door : number

    constructor(mk:string , md:string ,yr:number, doors : number){
        super(mk = mk,md = md,yr = yr)
        this.door = doors
    }

    getInfo(): string {
        return `${super.getInfo()} doors: ${this.door}`
    }
}

let newCar = new Car("Toyota" , "Gli" , 2012 ,4)
newCar.getInfo()


class Bike extends Vehicle { 
    hasSideCar : boolean

    constructor(mk:string , md:string ,yr:number,hc : boolean){
        super(mk = mk,md = md,yr = yr)
        this.hasSideCar = hc
    }

    getInfo(): string {
        return `${super.getInfo()} has Side Car : ${this.hasSideCar}`
    }
}


let newBike = new Bike("BMW" , "bmw20394" , 2022 , true)
newBike.getInfo()

console.log(newCar);
console.log(newBike);

//! ********************************************************************