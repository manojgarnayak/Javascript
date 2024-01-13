// let myName = "      Manoj       "
// console.log(myName.truelength);

let myHeros = ["Captain","Thor"]

let heroPower = {
    Captain: "Shield",
    Thor: "Hammer",

    getCaptainPower: function(){
        console.log(`Captain Power is ${this.Captain}`)
    }
}

Object.prototype.manoj = function(){
    console.log(`Manoj is present in all objects`);
}

Array.prototype.heyManoj = function(){
    console.log("Hii Manoj");
}
//heroPower.manoj()
// myHeros.manoj()
// myHeros.heyManoj()
//heroPower.heyManoj()

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const taSupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

//Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "Manoj     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Bhalu".trueLength()
"Garnayak".trueLength()