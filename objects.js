// singleton

//object literals
// Object.create (Constructer method of creating objects)

const mysym = Symbol("key1") //symbol declaration

const jsuser = {
    name: "Manoj",
    "full name": "Manoj Garnayak", //cannot be accessed by using the dot method
    [mysym]: "mykey1", //to get symbol as a datatype
    age: 23,
    location: "Bhubaneswar",
    email: "manoj.garnayak48@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Fri"]
}

// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mysym])

jsuser.email = "manojgarnayak07@gmail.com"
//Object.freeze(jsuser) //changes cannnot be made once the object has been freezed or locked

jsuser.name = "Bhalu"
//console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello user");
}

jsuser.greeting2 = function(){
    console.log(`Hello user ,${this.name}`);
}

// console.log(jsuser.greeting); //function anonymous

// console.log(jsuser.greeting());
// console.log(jsuser.greeting2());


//non singleton object

const user = new Object();
user.id = "1234abc"
user.name = "Manoj"
user.isLoggedIn = false
//console.log(user);

const reguser = {
    email: "user12@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Manoj",
            lastname: "Garnayak"
        }   
    }
}
//console.log(reguser.fullname.userfullname.firstname);

const ob1 = {
    1: "a",
    2: "b"
}
const ob2 = {
    3: "c",
    4: "d"
}

const ob3 = Object.assign({} ,ob1 ,ob2) //combine 2 objects //good practice
//Object.assign(target,source) //good practice

const ob4 = {...ob1 ,...ob2} //used most commonly
//console.log(ob4);

//console.log(user);
console.log(Object.keys(user)); //returns all the keys of the object inside of an array
console.log(Object.values(user));//returns all the values of the object inside of an array
console.log(Object.entries(user));//returns all the key value pairs in the form of indivisual array inside of an array

console.log(user.hasOwnProperty('isLoggedIn'));//returns a true or false value
