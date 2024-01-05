//IMMEDIATELY INVOKED FUNCTION EXPRESSION

// named iife
(function chai(){
    console.log("DB Connected")
})();
// () this first bracket is function definition and the () second bracket is known as function execution 

// ; a simple semicolon is needed to stop the iife code immediately before moving to a new function


// simple iife
( (name) => {
    console.log(`Mongodb Connected to ${name}`)
})("Manoj");