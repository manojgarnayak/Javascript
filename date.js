let myDate = new Date()
console.log(myDate)

console.log(myDate.toString()) // Wed Sep 13 2023 16:32:35 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())// Wed Sep 13 2023
console.log(myDate.toISOString())// 2023-09-13T11:02:27.997Z
console.log(myDate.toLocaleDateString())// 13/9/2023
console.log(myDate.toLocaleString())// 13/9/2023, 4:32:35 pm
console.log(myDate.toLocaleTimeString()) //4:32:35 pm

//Type of date is Object 

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

myCreatedDate.toLocaleString('default',{
    weekday: "long",
})