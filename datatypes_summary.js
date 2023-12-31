//Primitive datatypes
//7 types :String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference(Non primitive)
// Array, Objects, Functions

const score = 100 //Number
const scoreValue = 123.98 //Number

const isLoggedIn = false //Boolean
const outsideTemp = null

let userEmail; //undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); //false

const bigNumber = 1414665757657558865778n; //bigint

// Non primitive

const heros = ["shaktiman","doga","naagraj"]//array
let myObj = {
    name: "Manoj",
    age: 23,
}//object

const myFunction = function(){
    //console.log("hello")
}

//console.log(typeof null) //object
//console.log(typeof myFunction)// function


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// stack (primitive) , heap (non-primitive)

let myYoutube = 'manojgarnayak'

let anothername = myYoutube
anothername = "Bhalu"

console.log(myYoutube)
console.log(anothername);

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "manoj@google.com"

console.log(userone.email)
console.log(usertwo.email)