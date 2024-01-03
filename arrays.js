// array 

const myArr = [1,2,3,4,5]
//console.log(myArr[0])

// array methods

// myArr.push(6)
// myArr.pop()

myArr.unshift(9) //add element to the starting of the array
myArr.shift()   //remove element from the starting of the array
//console.log(myArr)

// console.log(myArr.includes(9)); //gives true and false value
// console.log(myArr.indexOf(-19)); //gives negative value if the element is not present in the array

// join method joins the elements or array but changes its datatype from array to string


//slice ,splice

const res = myArr.slice(1,3)

// console.log(res)

const res1 = myArr.splice(1,3) //original array is manipulated it cuts off the section of the array which is asked 
// console.log(res1)

const marvelHeroes = ['captain','iron man','hulk']
const dcHeroes = ['superman','batman','wonderwomen']

let heroes = marvelHeroes.concat(dcHeroes)
//console.log(heroes)

const allheroes = [...marvelHeroes, ...dcHeroes] //spread operator
//console.log(allheroes)

const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarr = anotherarr.flat(Infinity) //returns a new array with all sub-array elements concatenated into one (the value inside the parameter determines how much depth do you want to be calculated) not a good practice 
//console.log(realarr)

console.log(Array.isArray("Manoj")) //returns a true a false value and checks whether it is a array or not
console.log(Array.from("Manoj")) //creates an array from an iterable object
console.log(Array.from({name: "Bhalu"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score3,score2)) //returns a new array from a set of elements