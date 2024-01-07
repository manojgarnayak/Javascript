// Iterations
// for loop


for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5){
        //console.log("It is the best number");
    }
    //console.log(element);
}



for (let i = 1; i <= 10; i++) {
    //console.log(`Multiplication table of ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop ${j} outer loop ${i}`);
        //console.log(`${i} * ${j} = ${i*j}`);
    }
}


let arr = ["Iron man","Hulk","Captain America"]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    //console.log(element);
}


// break and continue 

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        //console.log("Detected the number 5");
        break;
    }
    //console.log(`Value of i is ${index}`);
}


for (let index = 1; index <= 10; index++) {
    if (index == 5){
        console.log("Detected the number 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}