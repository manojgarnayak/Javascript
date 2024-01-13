// Object Literal

const user = {
    username: "Manoj",
    logInCount: 5,
    signedIn: true,

    getUserDetails: function(){
        //console.log("User details");
        console.log(`username: ${this.username}`);
        console.log(this); // all details of the object
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this); // {}


// Constructor function
// new keyword is a constructor function

function User(username, logInCount, isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this //Optional 
}

const userOne = new User("Manoj", 8, true)
const userTwo = new User("Garnayak", 10, false)
console.log(userOne);
console.log(userTwo);