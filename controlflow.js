//  Control Flow S //

// IF 

// if (true){
//     console.log("Hello")
// }

// const isUserLoggedin = true
// if (isUserLoggedin){
//     console.log("User is logged in");
// }


// const temperature = 39
// if (temperature > 40){
//     console.log("Temperature is greater than 40");
// } else{
//     console.log("Temperature is less than 40");
// }


// const score = 200
// if(score > 100){
//     const power = "Fly"
//     console.log(`User Power ${power}`)
// }


// const balance = 1000
// if (balance > 500) console.log("Executed"), console.log("Execution"); //Bad practise


// const balance = 1200
// if (balance < 500){
//     console.log("Less than 500")
// } else if (balance < 750){
//     console.log("Less than 750")
// } else if (balance < 1000){
//     console.log("Less than 1000")
// } else {
//     console.log("Greater than 1000")
// }


// const userLoggedIn = true
// const debitCard = true
// const loggedInfromGoogle = false
// const loggedInfromEmail = true

// if (loggedInfromGoogle || loggedInfromEmail) {
//     console.log("User Logged in")
// }
// if (userLoggedIn && debitCard) {
//     console.log("Allowed to buy courses")
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//                        Switch Case statement

// const month = 6
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//         console.log("august");
//         break;
//     case 9:
//         console.log("september");
//         break;
//     case 10:
//         console.log("october");
//         break;
//     case 11:
//         console.log("november");
//         break;
//     case 12:
//         console.log("december");
//         break;

//     default:
//         console.log("Wrong input");
//         break;
// }


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//               Truthy and Falsy Values


// const userEmail = "manoj@gmail.com"
// if (userEmail) {
//     console.log("Got user mail");
// } else{
//     console.log("Dont have user mail")
// }
//falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NAN, 

//truthy values: true, "0", 'false', ' ', [], {}, function(){}

// const arr = []
// if (arr.length === 0) {
//     console.log("Truthy");
// } else{
//     console.log("Falsy");
// }


// const obj = {}
// if (Object.keys(obj).length === 0) {
//     console.log("Object is empty");
// }


// Nullish coalescing Operator (??): null defined

// let val1;
//val1 = 5 ?? 10             #5
//val1 = null ?? 10          #10
//val1 = undefined ?? 15     #15
//val1 = null ?? 10 ??20     #10
// console.log(val1)



//   Ternary Operator
//   condition ? true : false

const iceTeaPrice = 100
iceTeaPrice > 180 ? console.log("true") : console.log("False");;