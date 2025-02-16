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


// class Vehicle {
//     make :string
//     model : string
//     year : number

//     constructor(mk:string , md:string ,yr:number){
//         this.make = mk,
//         this.model = md,
//         this.year = yr
//     }

//     getInfo(){
//         return `make:${this.make}, model:${this.model}, year${this.year}`
//     }
// }

// class Car extends Vehicle { 
//     door : number

//     constructor(mk:string , md:string ,yr:number, doors : number){
//         super(mk = mk,md = md,yr = yr)
//         this.door = doors
//     }

//     getInfo(): string {
//         return `${super.getInfo()} doors: ${this.door}`
//     }
// }

// let newCar = new Car("Toyota" , "Gli" , 2012 ,4)
// newCar.getInfo()


// class Bike extends Vehicle { 
//     hasSideCar : boolean

//     constructor(mk:string , md:string ,yr:number,hc : boolean){
//         super(mk = mk,md = md,yr = yr)
//         this.hasSideCar = hc
//     }

//     getInfo(): string {
//         return `${super.getInfo()} has Side Car : ${this.hasSideCar}`
//     }
// }


// let newBike = new Bike("BMW" , "bmw20394" , 2022 , true)
// newBike.getInfo()

// console.log(newCar);
// console.log(newBike);

//! ********************************************************************
















//! ********************************************************************

//? Question 4: Access Modifiers and Getters/Setters
// Create a class called BankAccount with:
// ● A private property for balance (number)
// ● A private readonly property for accountNumber (string)
// ● A constructor that initializes both properties
// ● A getter method for balance
// ● A getter method for accountNumber
// ● A method called deposit(amount: number) that adds to the balance
// ● A method called withdraw(amount: number) that subtracts from the balance but prevents
// overdrafts by throwing an error if the amount is greater than the balance
// Test the class by creating an account, making deposits and withdrawals, and trying to access
// the private properties directly.


// class BankAccount {
//     private balance:number
//     readonly accountNumber : string

//     constructor(bln:number , accN : string){
//         this.balance = bln
//         this.accountNumber = accN
//     }

//     getBalance(){
//         return this.balance
//     }
//     getAccountNumber(){
//         return this.accountNumber
//     }

//     deposit(amount:number){
//         if(amount > 0){
//             this.balance += amount
//             alert(amount + ":amount added ")
//         }
//     }

//     withdraw(amount:number){
//         if(amount > this.balance){
//             alert("no enough money")
//         }else{
//             this.balance -= amount
//             alert(amount + "withdraw")
//         }
//     }

// }

// let account1 = new BankAccount(1000,"abc2343ebwhxawewz")
// account1.getBalance()
// account1.getAccountNumber()
// account1.deposit(100)

// console.log(account1);




//! ********************************************************************



//! ********************************************************************
// Question 5: Abstract Classes

// Create an abstract class called Shape with a protected property for color (string),
// a constructor that sets the color, an abstract method called calculateArea() that
// returns a number, and a concrete method called getColor() that returns the color.
// Then create two concrete classes that extend Shape: Circle with a property for
// radius (number), and Rectangle with properties for width (number) and height
// (number). Implement the calculateArea() method in each subclass. Then create
// instances of both shapes, calculate their areas, and get their colors.


abstract class Shape{
    constructor(protected color:string){}

    getColor(){
        return this.color
    }
    abstract calculagteArea():void;
}

class Cricle extends Shape{

    radius:number

    constructor(color:string,rd:number){
        super(color = color)
        this.radius = rd
    }

    calculagteArea():void{
        console.log(`Area of Circle is :${3.142 * (this.radius * this.radius)} | Color is${super.getColor()}`)
    }

}

let circle1 = new Cricle("blue",2)
console.log(circle1);
console.log(circle1.calculagteArea());

class Rectangle extends Shape{

    width : number
    height :number
    constructor(color:string,w:number,h:number){
        super(color = color)
        this.width = w
        this.height = h
    }

    calculagteArea():void{
        console.log(`Area of Rectangle is${this.width * this.height} | Color is ${super.getColor()}`);
    }

}

let Rec1 = new Rectangle("orange",3,4)
console.log(Rec1);
console.log(Rec1.calculagteArea());
//! ********************************************************************