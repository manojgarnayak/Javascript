const User = {
    _email: 'bhalu@gmail.com',
    _password: '12345abc',
    get email(){
        return this._email.toLowerCase()
    },
    set email(value){
        this._email = value
    }
}

const bhalu = Object.create(User)
console.log(bhalu._email);
console.log(bhalu._password);