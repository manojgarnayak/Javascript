const descriptor =Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(descriptor);
//console.log(Math.PI);


const hello = {
    name: 'Manoj',
    email: 'manoj@gmail.com',
    isAvailable: true
}
// console.log(Object.getOwnPropertyDescriptor(hello, "name"));
Object.defineProperty(hello, 'name', {
    writable: false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(hello, "name"));

for (let [key, value] of Object.entries(hello)) {
    if (typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}