const score = 400; 

const balance = new Number(100)
console.log(balance) //[Number: 100]
console.log(score) //400

console.log(balance.toString())
console.log(balance.toFixed(2)) //100.00

const otherNumber = 123.897
console.log(otherNumber.toPrecision(3))

const hundred = 1000000
console.log(hundred.toLocaleString())// 10,00,000

//MATHS//

console.log(Math.abs(-4))
console.log(Math.round(99.943804))
console.log(Math.random()*10)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)