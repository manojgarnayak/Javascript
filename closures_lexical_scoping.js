//Closures
// function init(){
//     let name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     displayName()
// }
// init()



//                          Closures
// function outer(){
//     let username = "Manoj"
//     function inner(){
//         let secret = "1234"
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("Inner two", username);
//         console.log(secret);
//     }
//     inner()
//     innerTwo()
// }
// outer()
// console.log("Too Outer", username);



// 

// document.getElementById('orange').onclick = function(){
//     document.body.style.backgroundColor = 'orange'
// }
// document.getElementById('green').onclick = function(){
//     document.body.style.backgroundColor = 'green'
// }



function clickHandler(color){
    //document.body.style.backgroundColor = `${color}`
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("Orange")
document.getElementById('green').onclick = clickHandler("Green")