// array 

const myArr = [1,2,3,4,5]
//console.log(myArr[0])

// array methods

// myArr.push(6)
// myArr.pop()

myArr.unshift(9)
myArr.shift()
//console.log(myArr)

//slice ,splice

const res = myArr.slice(1,3)

//console.log(res)

const res1 = myArr.splice(1,3) //original array is manpipulated it cuts off the section of the array which is asked 
//console.log(res1)

const marvelHeroes = ['captain','iron man','hulk']
const dcHeroes = ['superman','batman','wonderwomwan']

let heroes = marvelHeroes.concat(dcHeroes)
//console.log(heroes)

const allheroes = [...marvelHeroes, ...dcHeroes] //spread operator
//console.log(allheroes)

const anotherarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarr = anotherarr.flat(Infinity)
//console.log(realarr)

