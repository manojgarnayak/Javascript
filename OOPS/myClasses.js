//  ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chocolate = new User("Manoj","hello@gmail.com","12345")
console.log(chocolate.encryptPassword());
console.log(chocolate.changeUsername());



// Behind the Scene

function User (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "1234")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());