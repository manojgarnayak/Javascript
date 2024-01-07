

const coding = ['js','java','python','cpp']

const values = coding.forEach((item) => {
    //console.log(item);
    return item
})
//console.log(values); //for each doesn't return any value

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                     filter function

// const mynums = [1,2,3,4,5,6,7,8,9,10]

//const value = mynums.filter( (num) => {
//    return num > 4
//})
//console.log(value)

// const newnums = []
// mynums.forEach((num)=>{
//     if (num>4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);

const books = [
    { title: 'book one', genre: 'fiction', edition: 2000},
    { title: 'book two', genre: 'history', edition: 2001},
    { title: 'book three', genre: 'fiction', edition: 2002},
    { title: 'book four', genre: 'horror', edition: 2003},
    { title: 'book five', genre: 'science', edition: 2004},
    { title: 'book six', genre: 'fiction', edition: 2005},
    { title: 'book seven', genre: 'non-fiction', edition: 2006},
    { title: 'book eight', genre: 'biography', edition: 2007}
];

const userbooks = books.filter((book) => {
    return book.genre == 'fiction'
})

const userbook = books.filter((book) => {
    return book.edition >= 2004
})
// console.log(userbooks);
// console.log(userbook);


//                        map function    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums  = mynums.map((num) => {
//     return num + 10
// })
//console.log(newnums)

// const newnums = mynums
//     .map((num) => num*10)
//     .map((num) => num+10)
//     .filter((num) => num >= 50)

// console.log(newnums)


//                   reduce function  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const mynums = [1,2,3,4,5]

// const total = mynums.reduce((acc,curr) => {
//     return acc + curr
// },0)
// console.log(total)

const shoppingcart = [
    {
        coursename: 'js course',
        price: 2999
    },
    {
        coursename: 'nextjs course',
        price: 4999
    },
    {
        coursename: 'react course',
        price: 3999
    }
]

const total = shoppingcart.reduce((acc,curr) => {
    return acc + curr.price
},0)
console.log(total);