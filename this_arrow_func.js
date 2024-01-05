const user = {
    username: "Manoj",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) //this keyword refers to the current context of the object
        //in simple words the value that is holding
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Bhalu"
// user.welcomeMessage()

//console.log(this) //returns {}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function chai(){
//     let username = "Manoj"
//     console.log(this.username);
// }
//chai()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const chai = () => {
    let username = "Manoj"
    console.log(this); // {}
}
//chai()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Arrow Function
//if we wrap anything inside curly brackets then we have to use return keyword
//Explicit return
const addTwo = (num1 ,num2) => {
    return num1 + num2
}
//console.log(addTwo(2,5))


//Implicit return 
//if we do not use curly brackets then we don't have to use return keyword
const addOne = (num1 ,num2) =>  num1 + num2
//console.log(addOne(2,5))
