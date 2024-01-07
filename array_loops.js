//for-of loop

const arr = [1,2,3,4,5]
for (const i of arr) {
    //console.log(`value of i is ${i}`);
}


const greeting = "Hello Manoj"
for (const i of greeting) {
    //console.log(`each char is ${i}`);
}

// Maps

const map = new Map() //map is used to give unique values and also maintain it's order
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('BAR',"Barcelona")
map.set('MAD',"Madrid")

//console.log(map);
for (const [i,j] of map) {
    //console.log(i,j);
}


// const myobj = {
//     'game1': 'NFS',
//     'game2': 'Project IGI',
//     'game3': 'Total Overdose'
// }

// for (const [key,value] of myobj) {
//     console.log(key,value);        NOT WORKING
// }



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                        for-in Loop

const myobj = {
    'game1': 'NFS',
    'game2': 'Project IGI',
    'game3': 'Total Overdose'
}
for (const key in myobj) {
    //console.log(`${key} game for ${myobj[key]}`);
}


const prog = ['js','cpp','python']

for (const key in prog) {
    //console.log(prog[key]);
}


// for (const key in map) {   // Map is not iterable
//     console.log(key);     //  NOT WORKING
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//       for-each Loop

const coding = ['js','java','python','cpp']
coding.forEach( (item) => {
    //console.log(item);
})

const printme = (value) =>{
    console.log(value);
}
//coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr)
})


const mycoding = [
    {
        languagename: 'Javascript',
        extentionname: '.js'
    },
    {
        languagename: 'Java',
        extentionname: '.java'
    },
    {
        languagename: 'Python',
        extentionname: '.py'
    }
] 

mycoding.forEach((item) => {
    console.log(item.languagename);
})