class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return `bhalu${this._password}`
    }
    set password(value){
        this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const bhalu = new User('manoj@gmail.com', '123abc')
console.log(bhalu.password);
console.log(bhalu.email);