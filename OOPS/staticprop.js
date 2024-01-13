class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const manoj = new User("Bhalu")
//console.log(manoj.createId());

const iphone = new Teacher("Iphone","teacher@gmail.com")
iphone.logMe()
//console.log(iphone.createId());