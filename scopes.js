//SCOPES
//global scope
// let a = 10
// const b = 20    
// var c = 30      //not a good practice to declare a variable with var

if(true){
    //block scope
    let a = 10
    const b = 20     //block scope the value declared inside the block scope should not go outside the block scope
    var c = 30
}

//console.log(a); //error thrown a is not defined
//console.log(b);  //error thrown b is not defined
//console.log(c); //error not thrown but that is the main problem

function one(){
    const username = "Manoj"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    //console.log(website)
    //two()
}
//one()


if(true){
    const username = "Manoj"
    if(username === "Manoj"){
        const alias = " Bhalu"
        //console.log(username + alias)
    }
    //console.log(alias)
}
//console.log(username)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1
}
//addone(5)


const addtwo = function(num){  //function expression
    return num + 2
}
//addtwo(5) //cannot be called before the function declaration