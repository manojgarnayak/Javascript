class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const manoj = new Teacher("Bhalu","hello@gmail.com","1234")
manoj.logMe()
manoj.addCourse()
const garnayak = new User("Kulcha")
garnayak.logMe()