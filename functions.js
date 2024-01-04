//FUNCTIONS

function sayMyName(){
    console.log('Manoj')
}
//sayMyName()


function addTwoNumbers(num1,num2){
    console.log(num1 + num2)
}
// const result = addTwoNumbers(5,7)
// console.log("Result is ",result) //gives undefined as output because nothing is returned from the function definition


function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
//const result = addTwoNumbers(2, 5)
//console.log("Result is:",result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a name")
        return
    }
    return `${username} just logged in`
}
//const message = loginUserMessage("Manoj") //if you do not pass any value as a argument it just returns undefined in return  
//console.log(message)


//Shopping cart situation

function calculateCartPrice(...price){ //rest opeator is used
    return price
}
//console.log(calculateCartPrice(200,300,400,2000))


const user = {
    username: "Manoj",
    email: "manoj.garnayak48@gmail.com"
}
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and email address is ${anyobj.email}`);
}
//handleObject(user)


const newArray = [200,600,460]
function returnsecondvalue(arr){
    return arr[2]
}
console.log(returnsecondvalue(newArray))