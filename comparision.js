// console.log(2 > 1);

// console.log("1" >  0)

// console.log(null > 0) //false 
// console.log(null == 0)//false 
// console.log(null >= 0)//true

//THE REASON IS THAT AN EQUALITY CHECK == AND COMPARISIONS >,<,<=,>= WORK DIFFERENTLY.
//COMPARISONS CONVERT NULL TO A NUMBER, TREATING IT AS 0.
//THAT'S WHY (3) NULL >= 0 IS TRUE AND (1) NULL > 0 IS FALSE.
// NOTE DO NOT USE THESE TYPE OF CONVERTIONS
console.log(undefined ==  0)//false
console.log(undefined > 0)//false 
console.log(undefined < 0)//false

console.log("2" === 2) // === now it also checks the datatype of both the operands